import { observable, action, toJS } from "mobx";
import { fabric } from "fabric";
import uiStore from "./ui.store";

interface Ipayload {
  key: keyof CanvasStore;
  value: any;
}

interface Iinitialize {
  canvasId: string;
  canvasType: string;
}

export class CanvasStore {
  @observable public canvas: any = null;
  @observable public jsonCanvases: any = {};
  @observable public jsonBg: any = {};
  @observable public objects: any = {
    after: [],
    before: [],
    bg: [],
  };
  @observable public canvasBox: any = null;
  @observable public resizeLoop: any = false;
  @observable public canvasHeight: any = false;
  @observable public canvasWidth: any = false;
  @observable public background: any = false;
  @observable public bgRotation: number = 90;
  @observable public activeColor: string = "#ef0707";
  @observable public activeStrokeColor: string = "#ef0707";
  @observable public activeObj: any = false;
  @observable public canvasMode: string = "hand";
  @observable public isBgLocked: boolean = false;

  @action.bound
  public setProp(payload: Ipayload): void {
    const key: keyof CanvasStore = payload.key;
    if (this.hasOwnProperty(key)) {
      this[key] = payload.value;
    } else {
      const err = new Error();
      err.message = `Property ${key} does not exist on ContactStore`;
      throw err;
    }
  }

  // ******************************************************************************************
  // ******************************************************************************************
  // CAVAS
  // ******************************************************************************************
  // ******************************************************************************************

  @action.bound
  public initialize({ canvasId, canvasType }: Iinitialize) {
    this.canvas = new fabric.Canvas(canvasId);
    this.canvasBox = document.getElementById("canvasBox");
    this.addObjects(this.objects[canvasType]);
    canvasType !== "bg" && this.setBackground();
    this.canvas.on("mouse:dblclick", this.requestOpenItemOptions);
    this.resizeCanvas();
    this.startResizeLoop();
  }

  @action.bound
  public addObjects(payload: any) {
    if (payload.length === 0) return;
    fabric.util.enlivenObjects(payload, (objects: any) => {
      const origRenderOnAddRemove = this.canvas.renderOnAddRemove;
      this.canvas.renderOnAddRemove = false;
      objects.forEach((o: any) => {
        this.styleControl(o);
        this.canvas.add(o);
      });
      this.canvas.renderOnAddRemove = origRenderOnAddRemove;
      this.canvas.renderAll();
    });
  }

  @action.bound
  public setBackground() {
    if (this.objects.bg.length === 0) return;
    fabric.util.enlivenObjects(this.objects.bg, (objects: any) => {
      const origRenderOnAddRemove = this.canvas.renderOnAddRemove;
      this.canvas.renderOnAddRemove = false;
      objects.forEach((o: any) => {
        this.canvas.setBackgroundImage(o);
      });
      this.canvas.renderOnAddRemove = origRenderOnAddRemove;
      this.canvas.renderAll();
    });
  }

  @action.bound
  public unmount() {
    this.canvas.removeListeners();
    this.stopResizeLoop();
    this.canvas.dispose();
  }

  @action.bound
  public saveCanvas(canvasType: string) {
    this.jsonCanvases[canvasType] = JSON.stringify(this.canvas);
  }

  @action.bound
  public saveObjects(canvasType: string) {
    if (this.canvas.isEmpty()) {
      return;
    } else {
      this.objects[canvasType] = [];
      this.canvas.forEachObject((obj: any) => {
        if (obj.excludeFromExport) return;
        const newObj = obj.toJSON();
        this.objects[canvasType].push(newObj);
      });
    }
  }

  @action.bound
  public hasBg() {
    if (this.objects.bg[0] === undefined) {
      return false;
    } else {
      return true;
    }
  }

  @action.bound
  public requestOpenItemOptions(e: any) {
    if (e.target !== null) {
      const test =
        e.target.type === "rect" ||
        e.target.type === "circle" ||
        e.target.type === "i-text" ||
        e.target.type === "line";
      if (test) {
        uiStore.toggleBool({
          key: "isCanvasItemOptionsVisible",
          value: true,
        });
      } else if (e.target.type === "image") {
        uiStore.toggleBool({
          key: "isEditBgVisible",
          value: true,
        });
      }
    }
  }

  @action.bound
  public resizeCanvas() {
    this.canvasWidth = this.canvasBox!.offsetWidth;
    this.canvasHeight = this.canvasBox!.offsetHeight;
    this.canvas.setDimensions({
      width: this.canvasWidth,
      height: this.canvasHeight,
    });
  }

  @action.bound
  public startResizeLoop() {
    const test =
      this.canvasWidth !== this.canvasBox!.offsetWidth ||
      this.canvasHeight !== this.canvasBox!.offsetHeight;
    if (test) {
      this.resizeCanvas();
    }
    this.resizeLoop = window.setTimeout(this.startResizeLoop, 500);
  }

  @action.bound
  public stopResizeLoop() {
    if (this.resizeLoop) {
      window.clearTimeout(this.resizeLoop);
    }
  }

  @action.bound
  public styleControl(item: any) {
    item.cornerSize = 20;
    item.cornerColor = "#1890ff";
    item.cornerStrokeColor = "#1890ff";
    item.transparentCorners = false;
    item.cornerStyle = "circle";
    return item;
  }

  @action.bound
  public clearCanvas() {
    this.canvas.clear();
  }

  @action.bound
  public clearSelection() {
    const active = this.canvas.getActiveObject();
    if (active !== null && active !== undefined) {
      if (active._objects) {
        active._objects.forEach((item: any) => this.canvas.remove(item));
      } else {
        this.canvas.remove(active);
      }
      this.activeObj = false;
    }
  }

  // ******************************************************************************************
  // ******************************************************************************************
  // CAVAS PHOTO EDIT
  // ******************************************************************************************
  // ******************************************************************************************

  @action.bound
  public uploadRequest() {
    document.getElementById("photoUpload")!.click();
  }

  @action.bound
  public addPhoto(file: any) {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        fabric.Image.fromURL(reader.result, (oImg: any) => {
          oImg.scale(0.2);
          oImg.rotate(90);
          this.canvas.clear();
          this.styleControl(oImg);
          this.canvas.add(oImg);
        });
      },
      false,
    );
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  @action.bound
  public onPhotoUpload(e: any) {
    this.addPhoto(e.target.files[0]);
  }

  @action.bound
  public rotateBackground(sens: string) {
    const rotateValue = sens === "right" ? 90 : -90;
    this.bgRotation += rotateValue;
    const objs = this.canvas.getObjects();
    if (objs.length !== 0) {
      objs[0].centeredRotation = true;
      objs[0].rotate(this.bgRotation);
      this.canvas.requestRenderAll();
    }
  }

  @action.bound
  public scale(payload: number) {
    const obj = this.canvas.getActiveObject();
    const scale = obj.getObjectScaling().scaleX;
    const newScale = scale + payload;
    obj.scale(newScale);
    this.canvas.renderAll();
  }

  @action.bound
  public center() {
    const obj = this.canvas.getActiveObject();
    obj.center();
    this.canvas.renderAll();
  }

  @action.bound
  public adjust() {
    const obj = this.canvas.getActiveObject();
    // obj.set("top", 0);
    // obj.set("left", 0);
    obj.scaleToWidth(this.canvas.width);
    this.center();
    // obj.left = 0;
    this.canvas.renderAll();
  }

  // ******************************************************************************************
  // ******************************************************************************************
  // ADD ITEMS
  // ******************************************************************************************
  // ******************************************************************************************

  @action.bound
  public drawingModeOn() {
    this.canvas.isDrawingMode = true;
    this.canvasMode = "free";
  }

  @action.bound
  public handModeOn() {
    this.canvas.isDrawingMode = false;
    this.canvasMode = "hand";
  }

  @action.bound
  public addSquare() {
    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: "#ef0707",
      stroke: "#ef0707",
      strokeWidth: 4,
    });
    this.canvas.add(this.styleControl(rect));
  }

  @action.bound
  public addCircle() {
    const circle = new fabric.Circle({
      top: 100,
      left: 100,
      radius: 50,
      fill: "#ef0707",
      stroke: "#ef0707",
      strokeWidth: 4,
    });
    this.canvas.add(this.styleControl(circle));
  }

  @action.bound
  public addLine() {
    const line = new fabric.Line([0, 0, 100, 100], {
      fill: "#ef0707",
      stroke: "#ef0707",
      strokeWidth: 1,
      selectable: true,
      evented: true,
    });
    this.canvas.add(this.styleControl(line));
  }

  @action.bound
  public addText() {
    const text = new fabric.IText("TEXT", {
      left: 100,
      top: 150,
      fill: "#ef0707",
      strokeWidth: 2,
      stroke: "#ef0707",
    });
    this.canvas.add(this.styleControl(text));
  }

  // ******************************************************************************************
  // ******************************************************************************************
  // EDIT ITEMS
  // ******************************************************************************************
  // ******************************************************************************************

  @action.bound
  public toggleObjFond(e: any) {
    const active = this.canvas.getActiveObject();
    const value =
      active.fill === "transparent" ? this.activeColor : "transparent";
    active.set("fill", value);
    this.canvas.renderAll();
  }

  @action.bound
  public changeObjColor(e: any) {
    const active = this.canvas.getActiveObject();
    active.fill !== "transparent" && active.set("fill", e.target.value);
    this.activeColor = e.target.value;
    this.canvas.renderAll();
  }

  @action.bound
  public changeObjStrokeColor(e: any) {
    const active = this.canvas.getActiveObject();
    active.set("stroke", e.target.value);
    this.activeStrokeColor = e.target.value;
    this.canvas.renderAll();
  }

  @action.bound
  public changeObjOpacity(value: any) {
    const active = this.canvas.getActiveObject();
    active.set("opacity", value);
    this.canvas.renderAll();
  }
}

const canvasStore = new CanvasStore();
export default canvasStore;
