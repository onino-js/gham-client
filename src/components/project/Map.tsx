import * as React from "react";
import { observer, inject } from "mobx-react";
import { Input, Button, Modal, Col, message } from "antd";
import {
  ClientResponse,
  createClient,
  GeocodingResponse,
  GeocodingResult,
  GoogleMapsClient,
} from "@google/maps";
import GeolocationInput from "./../shared/GeolocationInput";
import styled from "../../styled-components";
import { _secondary } from "../../css/_colors";

interface Props {
  uiStore: any;
  projectStore: any;
  form: any;
}

interface State {
  isModalOpen: boolean;
  foundAddress: GeocodingResult[];
  lat?: number;
  lng?: number;
}

const error = () => {
  message.error("Lieu non trouvé");
};

const Container: any = styled(Col as any).attrs({
  span: 24,
})`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const AddressInput: any = styled(Input as any)`
  max-width: 300px;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 400px;
  overflow-y: auto;
`;

const ListItem = styled.div`
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-size: 1.1em;
  border-bottom: 1px solid ${_secondary};
`;

@inject((allStores: any) => ({
  projectStore: allStores.projectStore,
}))
@observer
export class MapView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.googleMapsClient = createClient({
      key: "AIzaSyDMGtTcgZUUSt4VKjC-oZZEAOTxBlrxlcU",
    });
    this.state = {
      isModalOpen: false,
      foundAddress: [],
      lat: 0,
      lng: 0,
    };
  }

  private googleMapsClient: GoogleMapsClient;

  private setAddress = (e: React.FormEvent<HTMLInputElement>) => {
    this.props.projectStore!.setAddress(e.currentTarget.value);
  };

  private handleAddressChoice = (fa: any) => {
    this.setState({
      ...fa.geometry.location,
      isModalOpen: false,
    });
    this.props.projectStore!.setAddress(fa.formatted_address);
  };

  private geocode = async () => {
    this.googleMapsClient.geocode(
      {
        address: `${this.props.projectStore.address}`,
      },
      (err, response) => {
        if (!err) {
          this.handleGeocodeResponse(response);
        } else {
          // TODO : handle bad response
          error();
        }
      },
    );
  };

  private reverseGeocode = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    this.googleMapsClient.reverseGeocode(
      { latlng: { latitude, longitude } },
      (err, response) => {
        if (!err) {
          this.handleGeocodeResponse(response);
        }
        // TODO : handle bad response
      },
    );
  };

  private handleGeocodeResponse(response: ClientResponse<GeocodingResponse>) {
    if (response.json.results.length >= 1) {
      this.setState({
        isModalOpen: true,
        foundAddress: response.json.results,
      });
    } else {
      // TODO : handle empty response
      console.log(response);
    }
  }

  public render() {
    return (
      <Container>
        <SearchHeader>
          <AddressInput
            id="address-input-text"
            value={this.props.projectStore.address}
            onChange={this.setAddress}
            size="large"
          />
          <Button size="large" onClick={this.geocode}>
            Chercher
          </Button>
        </SearchHeader>

        <GeolocationInput
          onPositionUpdate={this.reverseGeocode}
          onCurrentPositionInitialized={({ latitude, longitude }) =>
            this.setState({ lat: latitude, lng: longitude })
          }
          initToCurrentPosition={true}
          latitude={this.state.lat}
          longitude={this.state.lng}
        />
        <Modal
          title="Choisissez dans la liste"
          centered={true}
          visible={this.state.isModalOpen}
          onCancel={() => {
            this.setState({ isModalOpen: !this.state.isModalOpen });
          }}
        >
          <ListBox>
            {this.state.foundAddress.map((fa: any) => (
              <ListItem
                key={fa.place_id}
                onClick={() => this.handleAddressChoice(fa)}
                style={{ cursor: "pointer" }}
              >
                {fa.formatted_address}
              </ListItem>
            ))}
          </ListBox>
        </Modal>
      </Container>
    );
  }
}

export default MapView;
