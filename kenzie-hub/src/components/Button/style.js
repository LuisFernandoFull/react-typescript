import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  color: var(--grey-0);

  font-family: "Inter";
  font-style: normal;
  font-size: 16px;
  line-height: 26px;

  border-radius: 4px;
  height: 50px;

  &:hover {
    background-color: var(--color-primary-Focus);
    transition: 1s ease;
  }

  &:active {
    background-color: var(--color-primary-Negative);
    border: 1px solid var(--color-primary-Negative);
  }
`;
