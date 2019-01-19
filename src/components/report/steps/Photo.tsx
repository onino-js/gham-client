import * as React from "react";
import PhotoInput from "../../inputs/photo/PhotoInput";

interface Props {}

class Photo extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <PhotoInput
        canvasType="photo"
        canvasId="canvas"
        addPhoto={true}
        editPhoto={true}
      />
    );
  }
}

export default Photo;
