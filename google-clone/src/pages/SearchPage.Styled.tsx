import { styled } from "@mui/system";
import Button from "@mui/material/Button";

export const SearchPageContainer = styled("div")`
  width: 100%;
  height: 100vh;
  padding: 20px 0px 0px;
  // overflow: "auto";
`;

export const HeaderContainer = styled("div")`
  displey: flex;
  flex-direction: column;
  margin: 0px 50px 0px 100px;
  border-bottom: 1px solid #3c4043;

  @media (min-width: 1299px) {
    margin: 0px 50px 0px 150px;
  }
`;

export const UpperHeader = styled("div")`
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
  padding: opx;

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

export const LowerHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px 15px 0px;
`;

export const LowerHeaderLeft = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 100px;
  }
`;

interface StyledLinkProps {
  active?: string;
}

export const StyledOptions = styled("div")<StyledLinkProps>`
  background-color: ${(props) => (props.active === "true" ? "#394457" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 1px solid #3c4043;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0px 14px;

  a {
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    color: ${(props) => (props.active === "true" ? "#8ab4f8" : "#f1f3f4")};
    &:hover {
      text-decoration: underline;
    }
    &:active {
      background-color: #394457;
    }
`;

export const LowerLeftContaier = styled("div")``;

export const LowerHeaderMiddle = styled("div")`
  display: flex;
  align-items: center;
  justify-self: end;
`;

export const LowerHeaderRight = styled("div")`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: #9aa0a6;
  font-family: Google Sans, arial, sans-serif;
  font-size: 14px;
  padding: 0 9px 0 12px;
  white-space: nowrap;
  text-transform: none;
`;
