import * as React from "react";
import PhotoEdit from "../../inputs/photo/PhotoEdit";

interface Props {
}

interface State {
  fileList?: any;
}
class WorkoutAfter extends React.Component<Props, State> {
  public render(): React.ReactNode {
    return (
      <PhotoEdit />
    );
  }
}

export default WorkoutAfter;
