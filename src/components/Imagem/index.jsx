import { StyledImg } from "./style";

export const Img = ({ src, alt, width, height }) => {
  return <StyledImg width={width} height={height} src={src} alt={alt} />;
};
