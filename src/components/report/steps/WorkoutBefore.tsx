import * as React from "react";
import PhotoInput from "../../inputs/photo/PhotoInput";

interface Props {}

class WorkoutBefore extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <PhotoInput
        canvasType="photoBeforeWork"
        canvasId="canvas"
        addItems={true}
        editItem={true}
      />
    );
  }
}

export default WorkoutBefore;
