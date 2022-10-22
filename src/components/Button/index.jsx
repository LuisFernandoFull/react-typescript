import { StyledButton, StyledButtonExit, StyledButtonTwo } from "./style";

export const Button = ({ type, onClick, children }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export const ButtonRegister = ({ type, onClick, children }) => {
  return (
    <StyledButtonTwo type={type} onClick={onClick}>
      {children}
    </StyledButtonTwo>
  );
};

export const ButtonExit = ({ type, onClick, children }) => {
  return (
    <StyledButtonExit type={type} onClick={onClick}>
      {children}
    </StyledButtonExit>
  );
};
