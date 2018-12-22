import * as React from "react";
import { Divider } from "antd";
import { ToggleButton } from "../shared/ToggleButton";
import { MyRow, InputTitle } from "../shared/Styled";
import { StringInput } from "../shared/StringInput";
import { NumberInput } from "../shared/NumberInput";
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
export class Penetration extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Pénétration</InputTitle>
        </Divider>
        <StringInput keyStore="penetrationNature" label="Nature" />
        <NumberInput keyStore="penetrationDiameter" label="Diamètre" />
        <MyRow>
          <ToggleButton keyStore="penetrationConserved" name="CONSERVER" />
        </MyRow>
        {!this.props.contactStore!.penetrationConserved && (
          <React.Fragment>
            <StringInput keyStore="_penetrationNature" label="Nature" />
            <NumberInput keyStore="_penetrationDiameter" label="Diamètre" />
            <NumberInput keyStore="_penetrationLength" label="Diamètre" />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Penetration;
