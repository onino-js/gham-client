import * as React from "react";
import { Input, Row, Col } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";
import { _secondary } from "../../css/_colors";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  label: string;
  keyStore: keyof (ContactStore);
}

const MyInput: any = styled(Input as any)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-color: ${(props: any) => (props.haschanged ? "#1890ff" : _secondary)};
`;

const InputCol: any = styled(Col as any).attrs({
  span: 16,
})``;

const LabelCol: any = styled(Col as any).attrs({
  span: 8,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${(props: any) =>
    props.haschanged ? "#1890ff" : _secondary};
  font-weight: 900;
  color: #fff;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
`;

const MyRow = styled(Row as any)`
  margin-top: 15px;
  margin-bottom: 15px;
  /* border: 1px solid blue; */
  width: 100%;
`;

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class NumberInput extends React.Component<Props> {
  private setContactProp = (e: any, key: keyof (ContactStore)) => {
    this.props.contactStore!.setProp({
      key: key,
      value: Number(e.currentTarget.value),
    });
  };

  public render() {
    return (
      <React.Fragment>
        <MyRow>
          <LabelCol
            haschanged={
              this.props.contactStore![this.props.keyStore] !== 0 ? 1 : 0
            }
          >
            {this.props.label}
          </LabelCol>
          <InputCol>
            <MyInput
              type="number"
              haschanged={
                this.props.contactStore![this.props.keyStore] !== 0 ? 1 : 0
              }
              value={this.props.contactStore![this.props.keyStore]}
              onChange={(e: any) => this.setContactProp(e, this.props.keyStore)}
              size="large"
            />
          </InputCol>
        </MyRow>
      </React.Fragment>
    );
  }
}

export default NumberInput;
