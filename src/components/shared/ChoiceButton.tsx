import * as React from "react";
import { Button } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";
import { _secondary } from "../../css/_colors";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  keyStore: keyof (ContactStore);
}

const MyButton = styled(Button as any)`
  margin-right: 10px;
  background-color: ${(props: any) =>
  props.type === "primary" ? "#008fa5" : _secondary};
`;

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class ChoiceButton extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <MyButton
          onClick={() =>
            this.props.contactStore!.setProp({
              key: this.props.keyStore,
              value: !this.props.contactStore![this.props.keyStore],
            })
          }
          type={
            this.props.contactStore![this.props.keyStore] ? "ghost" : "primary"
          }
          size="large"
        >
          IMPRODUCTIF
        </MyButton>
      </React.Fragment>
    );
  }
}

export default ChoiceButton;
