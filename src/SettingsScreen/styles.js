import styled, { css } from "styled-components";

export const VerticalList = styled.ul`
  margin: 0;
  padding: 20px;
  border: 2px solid cornflowerblue;
  border-radius: 5px;
  width: 25%;
`;

export const ListItem = styled.li`
  list-style-type: none;
  font-weight: bold;

  ${({ id }) =>
    id === 3 &&
    css`
      color: red;
    `};
`;
