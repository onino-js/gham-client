import * as React from "react";
import { Input, Row, Col } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  label: string;
  keyStore: keyof (ContactStore);
}

const MyInput: any = styled(Input as any)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-color: ${(props: any) => (props.haschanged ? "#1890ff" : "#CCC")};
`;

const InputCol: any = styled(Col as any).attrs({
  xs: 16,
  sm: 16,
  md: 16,
  lg: 16,
  xl: 16,
})``;

const LabelCol: any = styled(Col as any).attrs({
  xs: 8,
  sm: 8,
  md: 8,
  lg: 8,
  xl: 8,
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${(props: any) => (props.haschanged ? "#1890ff" : "#CCC")};
  font-weight: 900;
  color: #fff;
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
export class StringInput extends React.Component<Props> {
  private setContactProp = (e: any, key: keyof (ContactStore)) => {
    this.props.contactStore!.setProp({
      key: key,
      value: e.currentTarget.value,
    });
  };

  public render() {
    return (
      <React.Fragment>
        <MyRow>
          <LabelCol
            haschanged={
              this.props.contactStore![this.props.keyStore] !== "" ? 1 : 0
            }
          >
            {this.props.label}
          </LabelCol>
          <InputCol>
            <MyInput
              haschanged={
                this.props.contactStore![this.props.keyStore] !== "" ? 1 : 0
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

export default StringInput;
