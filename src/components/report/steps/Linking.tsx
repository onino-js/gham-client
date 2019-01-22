import * as React from "react";
import { Divider } from "antd";
import { InputTitle } from "../../shared/Styled";
import { StringInput } from "../../inputs/StringInput";
import { observer, inject } from "mobx-react";
import { AllStores } from "../../../models/all.stores.model";
import { ReportStore } from "../../../stores/report";

interface Props {
  reportStore?: ReportStore;
}

@inject((allStores: AllStores) => ({
  reportStore: allStores.reportStore,
}))
@observer
export class Linking extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Branchements</InputTitle>
        </Divider>
        <StringInput
          keyStore="linking"
          label="Type liaison"
          mandatory={true}
          list={["INDIVIDUEL", "COLLECTIF", "IMPRODUCTIF"]}
        />
        <StringInput
          keyStore="nbOfYears"
          label="Nombre d'annèes"
          mandatory={true}
        />

        <Divider>
          <InputTitle>Arrivée</InputTitle>
        </Divider>
        <StringInput keyStore="arrivalNature" label="Nature" mandatory={true} />
        <StringInput
          keyStore="arrivalDiameter"
          label="Diamètre"
          mandatory={true}
        />
        <Divider>
          <InputTitle>Pénétration</InputTitle>
        </Divider>
        <StringInput
          keyStore="penetrationNature"
          label="Nature"
          mandatory={true}
        />
        <StringInput
          keyStore="penetrationDiameter"
          label="Diamètre"
          mandatory={true}
        />
        <StringInput
          keyStore="penetrationConserved"
          label="Conserver ?"
          mandatory={true}
          list={["OUI", "NON"]}
        />
        {this.props.reportStore!.penetrationConserved === "NON" && (
          <React.Fragment>
            <StringInput
              keyStore="_penetrationNature"
              label="Nature"
              mandatory={true}
            />
            <StringInput
              keyStore="_penetrationDiameter"
              label="Diamètre"
              mandatory={true}
            />
            <StringInput
              keyStore="_penetrationLength"
              label="Longueur"
              mandatory={true}
            />
          </React.Fragment>
        )}
        <Divider>
          <InputTitle>Détente</InputTitle>
        </Divider>
        <StringInput keyStore="detenteType" label="Type" mandatory={true} />
        <StringInput
          keyStore="detentePose"
          label="Action"
          mandatory={true}
          list={["EXISTANTE", "A POSER"]}
        />
      </React.Fragment>
    );
  }
}

export default Linking;
