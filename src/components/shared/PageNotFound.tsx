import * as React from "react";
import { Flex } from "../layout/Flex";

interface Props {}

class PageNotFound extends React.Component<Props> {
  public render() {
    return (
      <Flex dir="c" alignH="center" alignV="center">
        404: Page non trouvée
      </Flex>
    );
  }
}

export default PageNotFound;
