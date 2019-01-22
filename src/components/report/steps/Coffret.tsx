import * as React from "react";
import { Divider } from "antd";
import { InputTitle } from "../../shared/Styled";
import { StringInput } from "../../inputs/StringInput";
import { inject, observer } from "mobx-react";
import { AllStores } from "../../../models/all.stores.model";
import { ReportStore } from "../../../stores/report";

interface Props {
  reportStore?: ReportStore;
}

const list: string[] = ["S/CARTER", "ROB. FAC.", "COFFRET"];
const list3 = ["OUI", "NON"];
const list2: string[] = [
  "ENCASTRE",
  "ENTERRE",
  "GRILLAGE",
  "HORS LIMITE",
  "SUR SOCLE",
  "EN SAILLIE",
];
const list4 = ["SUPPRIMER", "REEQUIPER", "POSER"];

@inject((allStores: AllStores) => ({
  reportStore: allStores.reportStore,
}))
@observer
export class Coffret extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <Divider>
          <InputTitle>Coffret actuel</InputTitle>
        </Divider>
        <StringInput
          list={list}
          keyStore="boitierType"
          label="Type"
          mandatory={true}
        />
        {this.props.reportStore!.boitierType === "COFFRET" && (
          <React.Fragment>
            <StringInput keyStore="coffretType" label="type" mandatory={true} />
            <StringInput
              list={list2}
              keyStore="fixation"
              label="Fixation"
              mandatory={true}
            />
          </React.Fragment>
        )}
        <StringInput
          list={list3}
          keyStore="poseBp"
          label="Pose détente BP?"
          mandatory={true}
        />
        <Divider>
          <InputTitle>Coffret projet</InputTitle>
        </Divider>
        <StringInput
          list={list4}
          keyStore="action"
          label="Action"
          mandatory={true}
        />
        {this.props.reportStore!.action === "POSER" && (
          <React.Fragment>
            <StringInput
              keyStore="_coffretType"
              label="type"
              mandatory={true}
            />
            <StringInput
              list={list2}
              keyStore="_fixation"
              label="Fixation"
              mandatory={true}
            />
          </React.Fragment>
        )}
        <StringInput
          list={list3}
          keyStore="_poseBp"
          label="Pose détente BP?"
          mandatory={true}
        />
      </React.Fragment>
    );
  }
}

export default Coffret;
