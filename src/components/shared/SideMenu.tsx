import * as React from "react";
import { Icon, Menu, Drawer } from "antd";
import { inject, observer } from "mobx-react";
import styled from "./../../styled-components";
import { navItems } from "./../../data/nav-items.data";
import { withRouter } from "react-router";

interface Props {
  uiStore?: any;
  history: any;
  match: any;
  location: any;
}

const MenuItem = Menu.Item;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
}))
@observer
class SideMenu extends React.Component<Props> {
  public state = {
    openKeys: [""],
  };

  private selectPage = ({ key }: any) => {
    this.props.history.push(key);
  };

  private close = () => {
    this.props.uiStore!.toggleBool({
      key: "isSidebarVisible",
      value: false,
    });
  };

  public render() {
    const { uiStore } = this.props;
    return (
      <Drawer
        placement="left"
        style={{ padding: 0 }}
        onClose={this.close}
        visible={uiStore.isSidebarVisible}
        width={250}
        title="Fiche client"
      >
        <Menu
          selectable={true}
          // theme="dark"
          // style={{ width: 360 }}
          // defaultSelectedKeys={['1']}
          mode="inline"
          openKeys={this.state.openKeys}
          onClick={this.selectPage}
        >
          {navItems.map((navItem, index) => (
            <MenuItem key={navItem.page}>
              <ItemBox>
                <div>
                  <Icon type={navItem.iconType} />
                  {navItem.title}
                </div>
              </ItemBox>
            </MenuItem>
          ))}
        </Menu>
      </Drawer>
    );
  }
}

export default withRouter(SideMenu);
