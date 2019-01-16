import * as React from "react";
import { Input, Row, Col, Dropdown, Menu } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ContactStore } from "../../stores/contact.store";
import { _secondary, _error, _primary } from "../../css/_colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyRow, LabelCol, InfoCol, SmallBullet } from "./Styled";

interface Props {
  uiStore?: any;
  contactStore?: ContactStore;
  label: string;
  keyStore: keyof (ContactStore);
  mandatory?: boolean;
  list?: string[];
  type?: string;
}

const MyInput: any = styled(Input as any)`
  border-radius: 0;
  border-color: ${(props: any) => (props.haschanged ? _primary : _secondary)};
`;

const InputCol: any = styled(Col as any).attrs({
  xs: 14,
  sm: 14,
  md: 14,
  lg: 14,
  xl: 14,
})``;

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  width: auto;
  padding-right: 10px;
`;

@inject((allStores: AllStores) => ({
  contactStore: allStores.contactStore,
}))
@observer
export class StringInput extends React.Component<Props> {
  private setContactProp = (e: any, key: keyof (ContactStore)) => {
    this.props.contactStore!.setProp({
      key: key,
      value:
        this.props.type === "number"
          ? Number(e.currentTarget.value)
          : e.currentTarget.value,
    });
  };
  private _setContactProp = (value: any, key: keyof (ContactStore)) => {
    this.props.contactStore!.setProp({
      key: key,
      value: value,
    });
  };

  public render() {
    const currentValue = this.props.contactStore![this.props.keyStore];
    const haschanged = currentValue !== "" && currentValue !== 0 ? 1 : 0;
    const isList = this.props.list && this.props.list.length !== 0;
    if (this.props.type === "number" && isList) {
      const err = new Error();
      err.message = "Input cannot be a number and have a list in the same time";
      throw err;
    }
    return (
      <React.Fragment>
        <MyRow>
          {isList ? (
            <Dropdown
              trigger={["click"]}
              overlay={
                <Menu selectable={true}>
                  {this.props.list!.map((item: string) => (
                    <Menu.Item
                      onClick={(e: any) =>
                        this._setContactProp(item, this.props.keyStore)
                      }
                      key={item}
                    >
                      {item}
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomLeft"
            >
              <LabelCol clickable={isList} haschanged={haschanged}>
                <SmallBullet mandatory={this.props.mandatory} />
                {this.props.label}
                <SearchBox>
                  <FontAwesomeIcon icon="search" style={{ float: "right" }} />
                </SearchBox>
              </LabelCol>
            </Dropdown>
          ) : (
            <LabelCol haschanged={haschanged}>
              <SmallBullet mandatory={this.props.mandatory} />
              {this.props.label}
            </LabelCol>
          )}
          <InputCol>
            <MyInput
              haschanged={haschanged}
              type={this.props.type}
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

export default StringInput;
