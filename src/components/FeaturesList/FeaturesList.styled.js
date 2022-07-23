import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Li = styled.li`
  width: 270px;
  background: ${({ isRed }) => (isRed ? "red" : "white")};
  &:hover ${Title} {
    color: blue;
  }
`;
