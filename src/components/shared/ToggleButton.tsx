import * as React from "react";
import { Button } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  keyStore: keyof (ContactStore);
  name: string;
  invert?: boolean;
}

const MyButton = styled(Button as any)`
  margin-right: 10px;
  /* background-color: ${(props: any) =>
    props.type === "primary" ? "#008fa5" : "#CCC"}; */
`;

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class ToggleButton extends React.Component<Props> {
  public render() {
    const primaryType = this.props.invert ? "ghost" : "primary";
    const secondaryType = this.props.invert ? "primary" : "ghost";
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
            this.props.contactStore![this.props.keyStore]
              ? primaryType
              : secondaryType
          }
          size="large"
        >
          {this.props.name}
        </MyButton>
      </React.Fragment>
    );
  }
}

export default ToggleButton;
