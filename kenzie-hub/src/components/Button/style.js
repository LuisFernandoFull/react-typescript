import styled from "styled-components";

export const StyledButton = styled.button`
  height: 50px;
  background-color: #ff577f;
  border: 1px solid #ff577f;
  border-radius: 4px;
  color: white;
  font-family: "Inter";
  font-style: normal;
  /* font-weight: 500; */
  font-size: 16px;
  line-height: 26px;

  &:hover {
    background-color: var(--color-primary-Focus);
    transition: 1s ease;
  }
`;
