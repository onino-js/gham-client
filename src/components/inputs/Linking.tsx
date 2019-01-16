import * as React from "react";
import { Divider } from "antd";
import { InputTitle, StepWrapper } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { observer, inject } from "mobx-react";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";

interface Props {
  contactStore?: ContactStore;
}

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class Linking extends React.Component<Props> {
  public render() {
    return (
      <StepWrapper>
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
          type="number"
          keyStore="nbOfYears"
          label="Nombre d'annèes"
          mandatory={true}
        />

        <Divider>
          <InputTitle>Arrivée</InputTitle>
        </Divider>
        <StringInput keyStore="arrivalNature" label="Nature" mandatory={true} />
        <StringInput
          type="number"
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
          type="number"
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
        {this.props.contactStore!.penetrationConserved === "NON" && (
          <React.Fragment>
            <StringInput
              keyStore="_penetrationNature"
              label="Nature"
              mandatory={true}
            />
            <StringInput
              type="number"
              keyStore="_penetrationDiameter"
              label="Diamètre"
              mandatory={true}
            />
            <StringInput
              type="number"
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
      </StepWrapper>
    );
  }
}

export default Linking;
