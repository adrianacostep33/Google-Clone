import styled from "styled-components";

export const UpperHeaderContainer = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const UpperHeaderLeft = styled("div")`
  display: flex;
  align-items: center;
  gap: 40px;
  flex: 1;
  position: relativ;

  @media (min-width: 1299px) {
    gap: 0px;
  }
`;

export const LogoContainer = styled("div")`
  position: relative;
  display: flex;
  align-items: center;

  img {
    object-fit: contain;
    height: 30px;

    @media (min-width: 1299px) {
      position: absolute;
      left: -139px;
      padding: 4px 28px 0 30px;
    }
  }
`;

export const SearchInputContainer = styled("div")`
  width: 500px;
`;

export const UpperHeaderRight = styled("div")`
  display: flex;
`;
