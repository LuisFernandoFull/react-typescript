import { Img } from "../Imagem";
import { StyledNav } from "./style";
import LogoHub from "../../assests/LogoHub.svg";
import { ButtonExit } from "../Button";
export const Nav = () => {
  return (
    <StyledNav>
      <div>
        <Img src={LogoHub} width={130} alt={"Logo kenzie hub"} />
        <ButtonExit>Sair</ButtonExit>
      </div>
    </StyledNav>
  );
};
