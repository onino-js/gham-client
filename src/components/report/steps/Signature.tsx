import * as React from "react";
import SignatureInput from "../../inputs/SignatureInput";

interface Props {}

interface State {
  fileList?: any;
}
class Signature extends React.Component<Props, State> {
  public render(): React.ReactNode {
    return <SignatureInput />;
  }
}

export default Signature;
