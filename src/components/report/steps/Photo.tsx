import * as React from "react";
import PhotoInput from "../../inputs/photo/PhotoInput";

interface Props {
}

interface State {
  fileList?: any;
}
class Photo extends React.Component<Props, State> {
    public render(): React.ReactNode {
    return (
      <PhotoInput />
    );
  }
}

export default Photo;
