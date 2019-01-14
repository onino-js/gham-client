import * as React from "react";
import { Input, Row, Col } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";
import { _secondary, _success, _error } from "../../css/_colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  label: string;
  keyStore: keyof (ContactStore);
}

const MyInput: any = styled(Input as any)`
  border-radius: 0;
  border-color: ${(props: any) => (props.haschanged ? "#1890ff" : _secondary)};
`;

const InputCol: any = styled(Col as any).attrs({
  xs: 14,
  sm: 14,
  md: 14,
  lg: 14,
  xl: 14,
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
  background-color: ${(props: any) =>
    props.haschanged ? "#1890ff" : _secondary};
  font-weight: 900;
  color: #fff;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
`;

const InfoCol: any = styled(Col as any).attrs({
  xs: 2,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 2,
})`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 1px solid ${_secondary};
  background-color: ${(props: any) =>
    !props.haschanged ? _secondary : props.isValid ? _success : _error};
  font-weight: 900;
  color: #fff;
  border-left: none;
`;

const MyRow = styled(Row as any)`
  margin-top: 15px;
  margin-bottom: 15px;
  /* border: 1px solid blue; */
  width: 100%;
`;

const Mandatory = () => <span style={{ color: "red" }}> * </span>;

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class StringListInput extends React.Component<Props> {
  private setContactProp = (e: any, key: keyof (ContactStore)) => {
    this.props.contactStore!.setProp({
      key: key,
      value: e.currentTarget.value,
    });
  };

  public render() {
    const haschanged =
      this.props.contactStore![this.props.keyStore] !== "" ? 1 : 0;
    return (
      <React.Fragment>
        <MyRow>
          <LabelCol haschanged={haschanged}>
            <Mandatory />
            {this.props.label}
          </LabelCol>
          <InputCol>
            <MyInput
              haschanged={haschanged}
              value={this.props.contactStore![this.props.keyStore]}
              onChange={(e: any) => this.setContactProp(e, this.props.keyStore)}
              size="large"
            />
          </InputCol>
          <InfoCol haschanged={haschanged} isValid={true}>
            {haschanged ? (
              <FontAwesomeIcon
                icon="check"
                style={{ fontSize: "1.5em", color: "#FFF" }}
              />
            ) : (
              <FontAwesomeIcon
                icon="exclamation"
                style={{ fontSize: "1.5em", color: "#FFF" }}
              />
            )}
          </InfoCol>
        </MyRow>
      </React.Fragment>
    );
  }
}

export default StringListInput;
