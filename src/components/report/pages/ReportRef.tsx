import * as React from "react";
import { observer, inject } from "mobx-react";

import styled from "../../../styled-components";
import { MyRow, PrimaryTitle } from "./../../shared/Styled";
import { UiStore } from "../../../stores/ui/index";
import NextButton from "./../../shared/NextButton";
import { Flex } from "../../layout/Flex";
import { InputPrefix } from "../../inputs/InputPrefix";

interface Props {
  uiStore?: UiStore;
  // domainStore?: DomainStore;
}

const ButtonWrapper: any = styled.div`
  display: ${(props: any) => (props.isValid ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const ErrorMessage = styled.div`
  font-size: 0.9em;
  color: red;
  width: 100%;
  text-align: center;
`;

@inject((allStores: any) => ({
  domainStore: allStores.domainStore,
}))
@observer
export class ReportRef extends React.Component<Props> {
  public render() {
    // const isValid = this.props.domainStore!.isReferenceValid;
    return (
      <Flex dir="c" alignH="center">
        <PrimaryTitle>Informations générales</PrimaryTitle>
        <InputPrefix
          list={["R31", "R32"]}
          // isValid={isValid}
          label="Ref. Grdf"
          mandatory={true}
        />
        <MyRow>
          {/* {!isValid && this.props.domainStore!.reference !== "" && (
            <ErrorMessage>Veuillez rentrer un nombre à 7 chiffres</ErrorMessage>
          )} */}
        </MyRow>
        {/* <ButtonWrapper isValid={isValid ? 1 : 0}>
          <NextButton disabled={!isValid} size={"large"} />
        </ButtonWrapper> */}
      </Flex>
    );
  }
}

export default ReportRef;
