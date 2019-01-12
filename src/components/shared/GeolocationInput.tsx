import * as React from "react";
import * as L from "leaflet";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import leafletImage from "leaflet-image";
import { MapStore } from "../../stores/map.store";

interface IPropsType {
  onPositionUpdate?: (latlng: { latitude: number; longitude: number }) => void;
  onCurrentPositionInitialized?: (
    latlng: { latitude: number; longitude: number },
  ) => void;
  initToCurrentPosition?: boolean;
  latitude?: number;
  longitude?: number;
  mapStore?: MapStore;
}

interface IState {
  marker?: L.Marker;
  map?: L.Map;
}

const MapBox = styled.div`
  flex: 1;
`;

@inject((allStores: any) => ({
  mapStore: allStores.mapStore,
}))
@observer
class GeolocationInput extends React.Component<IPropsType, IState> {
  constructor(props: IPropsType) {
    super(props);
    this.state = {};
  }

  public componentWillUnmount() {
    if (this.state && this.state.map) {
      this.state.map.remove();
    }
  }

  public componentWillReceiveProps(next: IPropsType) {
    if (
      next.latitude !== this.props.latitude ||
      next.longitude !== this.props.longitude
    ) {
      if (this.state.marker) {
        this.state.marker.setLatLng([next.latitude || 0, next.longitude || 0]);
        this.state.marker.setLatLng([next.latitude || 0, next.longitude || 0]);
        const map = this.state.map;
        if (map) {
          map.setView(this.state.marker.getLatLng(), map.getZoom());
        }
      }
    }
  }

  public componentDidMount() {
    if (this.props.initToCurrentPosition) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            if (this.props.onCurrentPositionInitialized) {
              this.props.onCurrentPositionInitialized({
                latitude,
                longitude,
              });
            }
            this.extracted([latitude, longitude]);
          },
          () => {
            this.extracted([
              this.props.latitude || 45.70529068504192,
              this.props.longitude || 4.988586902618409,
            ]);
          },
        );
      } else {
        this.extracted([
          this.props.latitude || 45.70529068504192,
          this.props.longitude || 4.988586902618409,
        ]);
      }
    } else {
      this.extracted([
        this.props.latitude || 45.70529068504192,
        this.props.longitude || 4.988586902618409,
      ]);
    }
  }

  public render() {
    return <MapBox id="mapInput" />;
  }

  private async extracted(
    center: [number, number] = [45.70529068504192, 4.988586902618409],
  ) {
    try {
      const map = L.map("mapInput").setView(center, 17);
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map,
      );
      const marker = new L.Marker(center, {
        draggable: true,
      }).on("dragend", (event: any) => {
        const position = event.target.getLatLng();

        if (this.props.onPositionUpdate) {
          this.props.onPositionUpdate({
            latitude: position.lat,
            longitude: position.lng,
          });
        }
      });
      marker.addTo(map);
      this.setState(
        {
          map,
          marker,
        },
        this.saveImg,
      );
    } catch (e) {
      console.error(e);
    }
  }

  private saveImg = () => {
    console.log("save image");
    const map = this.state.map;
    const mapStore = this.props.mapStore;
    leafletImage(this.state.map, function(err: any, canvas: any) {
      if (err) {
        console.log(err);
      } else {
        const img = document.createElement("img");
        const dimensions = map!.getSize();
        img.width = dimensions.x;
        img.height = dimensions.y;
        img.src = canvas.toDataURL();
        mapStore!.setMapImg(img.outerHTML);
      }
    });
  };
}

export default GeolocationInput;
