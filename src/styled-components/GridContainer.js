import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.rows || "repeat(3, 1fr)"};
  grid-template-columns: ${(props) => props.columns || "repeat(2, 1fr)"};
  justify-items: center;
  gap: ${(props) => props.gap || "20px"};
`;

export default GridContainer;
