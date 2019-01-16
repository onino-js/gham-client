import styled from "../../styled-components";

interface Iprops {
  dir: "x" | "y";
  p: number;
}

export const Scrollable: any = styled.div`
  overflow-y: ${(props: Iprops) => (props.dir === "y" ? "auto" : "hidden")};
  overflow-x: ${(props: Iprops) => (props.dir === "x" ? "auto" : "hidden")};
  padding: ${(props: Iprops) => props.p}px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
