import * as React from "react";
import PhotoEdit2 from "../../inputs/photo/PhotoEdit2";

interface Props {}

interface State {
  fileList?: any;
}
class WorkoutBefore extends React.Component<Props, State> {
  public render(): React.ReactNode {
    return <PhotoEdit2 />;
  }
}

export default WorkoutBefore;
