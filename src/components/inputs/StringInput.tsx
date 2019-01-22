import * as React from "react";
import { Input, Row, Col, Dropdown, Menu } from "antd";
import { observer, inject } from "mobx-react";
import styled from "../../styled-components";
import { AllStores } from "../../models/all.stores.model";
import { ReportStore } from "../../stores/report";
import { _secondary, _error, _primary } from "../../css/_colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MyRow,
  LabelCol,
  InfoCol,
  SmallBullet,
  InputCol,
  MyInput,
} from ".//StyledInput";

interface Props {
  uiStore?: any;
  reportStore?: ReportStore;
  label: string;
  keyStore: keyof (ReportStore);
  mandatory?: boolean;
  list?: string[];
  type?: string;
}

const SearchBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  width: auto;
  padding-right: 10px;
`;

@inject((allStores: AllStores) => ({
  reportStore: allStores.reportStore,
}))
@observer
export class StringInput extends React.Component<Props> {
  private setContactProp = (e: any, key: keyof (ReportStore)) => {
    this.props.reportStore!.setProp({
      key: key,
      value:
        this.props.type === "number"
          ? Number(e.currentTarget.value)
          : e.currentTarget.value,
    });
  };
  private _setContactProp = (value: any, key: keyof (ReportStore)) => {
    this.props.reportStore!.setProp({
      key: key,
      value: value,
    });
  };

  public render() {
    const currentValue = this.props.reportStore![this.props.keyStore];
    const haschanged = currentValue !== "" ? 1 : 0;
    const isList = this.props.list && this.props.list.length !== 0;
    if (this.props.type === "number" && isList) {
      const err = new Error();
      err.message = "Input cannot be a number and have a list in the same time";
      throw err;
    }
    return (
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
            <LabelCol clickable={isList ? 1 : 0} haschanged={haschanged}>
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
            type="text"
            value={this.props.reportStore![this.props.keyStore]}
            onChange={(e: any) => this.setContactProp(e, this.props.keyStore)}
            size="large"
          />
        </InputCol>
        <InfoCol haschanged={haschanged} valid={1}>
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
    );
  }
}

export default StringInput;
