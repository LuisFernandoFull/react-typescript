import styled from "styled-components";

export const StyledTitleOne = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
`;

export const StyledTitleTwo = styled(StyledTitleOne)`
  font-weight: 600;
  font-size: 16px;
`;

export const StyledTitleThree = styled(StyledTitleOne)`
  font-size: 14px;
`;

export const StyledHeadline = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;

export const StyledHeadlineBold = styled(StyledHeadline)`
  font-weight: 600;
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
`;

export const StyledHeadlineItalic = styled(StyledHeadline)`
  font-style: italic;
`;
