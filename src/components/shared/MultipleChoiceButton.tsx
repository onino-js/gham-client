import * as React from "react";
import { Button, Col } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";
import { MyRow, LabelCol, SmallBullet } from "./Styled";

export interface IchoiceItem {
  title: string;
  keyStore: keyof (ContactStore);
}

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  choiceItems: IchoiceItem[];
  mandatory?: boolean;
  label: string;
}

const MyButton = styled(Button as any)`
  border-radius: 0;
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
      <MyRow>
        <LabelCol>
          <SmallBullet mandatory={this.props.mandatory} />
          {this.props.label}
        </LabelCol>
        <Col>
          {this.props.choiceItems.map(
            (choiceItem: IchoiceItem, index: number) => (
              <MyButton
                key={"multiple-choices" + index}
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
            ),
          )}
        </Col>
      </MyRow>
    );
  }
}

export default MultipleChoiceButton;
