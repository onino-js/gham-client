import * as React from "react";
import { Col, Menu, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";

import styled from "../../styled-components";
import { MyRow, InfoCol, LabelCol, MyInput, SmallBullet } from "./StyledInput";
import { ProjectStore } from "../../stores/project.store";
import { UiStore } from "../../stores/ui/index";
import { _primary, _secondary, _success, _error } from "../../css/_colors";

interface Props {
  uiStore?: UiStore;
  projectStore?: ProjectStore;
  list: string[];
  isValid?: boolean;
  label: string;
  mandatory?: boolean;
}

const MenuCol: any = styled(Col as any).attrs({
  xs: 3,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 2,
})`
  border-radius: 0px;
  height: 40px;
`;

const InputCol: any = styled(Col as any).attrs({
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
})``;

const SpanChoice: any = styled.div`
  flex: 1;
  line-height: ${"40px"};
  height: 40px;
  cursor: pointer;
  text-align: center;
  border-top: 1px solid
    ${(props: any) => (props.haschanged ? _primary : _secondary)};
  border-bottom: 1px solid
    ${(props: any) => (props.haschanged ? _primary : _secondary)};
`;

@inject((allStores: any) => ({
  projectStore: allStores.projectStore,
}))
@observer
export class InputPrefix extends React.Component<Props> {
  private setReference = (e: any) => {
    this.props.projectStore!.setReference(e.currentTarget.value);
  };

  private selectRefPrefix = (e: any) => {
    this.props.projectStore!.setRefPrefix(e.key);
  };

  public render() {
    const isValid = this.props.isValid;
    const menu = (
      <Menu selectable={true} onSelect={this.selectRefPrefix}>
        {this.props.list.map((item: string) => (
          <Menu.Item key={item}>{item}</Menu.Item>
        ))}
      </Menu>
    );
    return (
      <MyRow>
        <LabelCol
          haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
        >
          <SmallBullet mandatory={this.props.mandatory} />
          {this.props.label}
        </LabelCol>
        <MenuCol haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}>
          <Dropdown overlay={menu} placement="bottomLeft">
            <SpanChoice>{this.props.projectStore!.refPrefix}</SpanChoice>
          </Dropdown>
        </MenuCol>
        <InputCol>
          <MyInput
            haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
            value={this.props.projectStore!.reference}
            onChange={this.setReference}
            placeholder=""
            size="large"
            style={{ width: "100%", letterSpacing: "5px" }}
          />
        </InputCol>
        <InfoCol
          haschanged={this.props.projectStore!.reference !== "" ? 1 : 0}
          valid={isValid ? 1 : 0}
        >
          {isValid ? (
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

export default InputPrefix;
