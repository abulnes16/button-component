import styled from "styled-components";

const GridCell = styled.div`
  grid-column: ${(props) => props.columns};
  grid-row: ${(props) => props.rows};
`;

export default GridCell;
