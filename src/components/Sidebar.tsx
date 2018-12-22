import * as React from "react";
import { Icon, Layout, Menu } from "antd";
import logo from "./../image/gham-logo.png";
import { inject, observer } from "mobx-react";
import styled from "./../styled-components";
import { navItems } from "../data/nav-items.data";
import { withRouter } from "react-router";

interface Props {
  uiStore?: any;
  history: any;
  match: any;
  location: any;
}

const MenuItem = Menu.Item;

const SideHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

const SideLogo = styled.img.attrs({
  src: logo,
})`
  height: 30px;
  cursor: pointer;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
}))
@observer
class Sidebar extends React.Component<Props> {
  public state = {
    openKeys: [""],
  };

  public selectPage = ({ key }: any) => {
    this.props.history.push(key);
  };

  public render() {
    const { uiStore } = this.props;
    return (
      <React.Fragment>
        <Layout.Sider
          trigger={null}
          collapsed={!uiStore.isSidebarVisible}
          width={250}
          defaultCollapsed={false}
          breakpoint="lg"
          style={{ overflow: "hidden" }}
          collapsedWidth={0}
          theme="light"
        >
          <SideHeader id="my-logo">
            <SideLogo onClick={uiStore.toggleStartPage} />
          </SideHeader>
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
        </Layout.Sider>
      </React.Fragment>
    );
  }
}

export default withRouter(Sidebar);
