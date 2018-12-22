interface IcreateImageParams {
  path: string;
  width: number;
  height: number;
}

export const createImage = (opt: IcreateImageParams): string => {
  const baseImage = new Image();
  baseImage.src = opt.path;
  const canvas = document.createElement("canvas");
  canvas.width = opt.width;
  canvas.height = opt.height;
  const ctx = canvas.getContext("2d");
  ctx!.drawImage(baseImage, 0, 0);
  const dataURL = canvas.toDataURL("image/png");
  // const data = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  return dataURL;
};
