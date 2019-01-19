import * as React from "react";
import PhotoInput from "../../inputs/photo/PhotoInput";

interface Props {}

class WorkoutAfter extends React.Component<Props> {
  public render(): React.ReactNode {
    return (
      <PhotoInput
        canvasType="photoAfterWork"
        canvasId="canvas"
        addItems={true}
        editItem={true}
      />
    );
  }
}

export default WorkoutAfter;
