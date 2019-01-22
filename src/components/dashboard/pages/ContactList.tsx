import * as React from "react";
import { Flex } from "./../../layout/Flex";
import { UiStore } from "../../../stores/ui";
import { UserStore } from "../../../stores/user";
import { inject, observer } from "mobx-react";
import NotReady from "../../shared/NotReady";

interface Props {
  uiStore?: UiStore;
  userStore?: UserStore;
}

@inject((allStores: any) => ({
  uiStore: allStores.uiStore,
  userStore: allStores.userStore,
}))
@observer
class ContactList extends React.Component<Props> {
  componentWillMount() {
    this.props.uiStore!.setActivePage("contact-list");
  }
  public render() {
    return (
      <Flex dir="c">
        <NotReady />
      </Flex>
    );
  }
}

export default ContactList;
