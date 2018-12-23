import * as React from "react";
import { Button } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";

export interface IchoiceItem {
  title: string;
  keyStore: keyof (ContactStore);
}

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  choiceItems: IchoiceItem[];
}

const MyButton = styled(Button as any)`
  /* margin-right: 10px; */
  border-radius : 0;
  /* background-color: ${(props: any) =>
    props.type === "primary" ? "#008fa5" : "#CCC"}; */
`;

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class MultipleChoiceButton extends React.Component<Props> {
  private toggleValue = (keyStore: keyof (ContactStore)) => {
    this.resetValues();
    this.props.contactStore!.setProp({
      key: keyStore,
      value: true,
    });
  };
  private resetValues = () => {
    this.props.choiceItems.forEach((item: IchoiceItem) => {
      this.props.contactStore!.setProp({
        key: item.keyStore,
        value: false,
      });
    });
  };
  public render() {
    return (
      <React.Fragment>
        {this.props.choiceItems.map((choiceItem: IchoiceItem) => (
          <MyButton
            onClick={() => this.toggleValue(choiceItem.keyStore)}
            type={
              this.props.contactStore![choiceItem.keyStore]
                ? "primary"
                : "ghost"
            }
            size="large"
          >
            {choiceItem.title}
          </MyButton>
        ))}
      </React.Fragment>
    );
  }
}

export default MultipleChoiceButton;
