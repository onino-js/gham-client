import * as React from "react";
import { Button } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";
import { MyRow } from "./Styled";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  keyStore: keyof (ContactStore);
  name: string;
  invert?: boolean;
}

const MyButton = styled(Button as any)`
  margin-right: 10px;
`;

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class ToggleButton extends React.Component<Props> {
  public render() {
    return (
      <MyRow>
        <MyButton
          onClick={() =>
            this.props.contactStore!.setProp({
              key: this.props.keyStore,
              value: !this.props.contactStore![this.props.keyStore],
            })
          }
          type={
            this.props.contactStore![this.props.keyStore] ? "primary" : "ghost"
          }
          size="large"
        >
          {this.props.name}
        </MyButton>
      </MyRow>
    );
  }
}

export default ToggleButton;
