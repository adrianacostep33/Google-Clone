import { styled } from "@mui/system";

export const HomePageContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

export const HeaderContainer = styled("div")`
  display: flex;
  justify-content: end;
  padding: 6px;
  align-items: center;

  a {
    display: inline-block;
    padding: 5px;
    margin: 0px 5px;
    color: #ffffff;
    text-decoration: none;
    font-size: 13px;
    font-family: arial, sans-serif;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const LogInButton = styled("button")`
  background-color: #8ab4f8;
  margin: 6px 8px;
  padding: 9px 23px;
  border: 1px solid transparent;
  color: #202124;
  cursor: pointer;
  font-family: Google Sans, Roboto, Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 0.25px;
  border-radius: 4px;
  white-space: nowrap;
`;

export const LogoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    object-fit: contain;
    height: 92px;
  }
`;

export const MainContainer = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  position: absolute;
  top: 25%; /* Positions it approximately 1/3 from the top */
  left: 0; /* Align it to the left edge of the container */
  right: 0; /* Align it to the right edge of the container */
`;

export const FooterContainer = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  background-color: #171717;
`;

export const UpperFooter = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 1px solid #3c4043;

  p {
    display: block;
    white-space: nowrap;
    padding: 15px;
    margin: 0px 5px;
    color: #e8eaed;
    text-decoration: none;
    font-size: 14px;
    font-family: arial, sans-serif;
  }
`;

export const LowerFooter = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #171717;
  border-bottom: 1px solid #3c4043;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1120px) {
    gap: 20px;
  }
`;

export const FooterLeft = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: block;
    white-space: nowrap;
    padding: 15px;
    margin: 0px 5px;
    color: #e8eaed;
    text-decoration: none;
    font-size: 14px;
    font-family: arial, sans-serif;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterRight = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    display: block;
    white-space: nowrap;
    padding: 15px;
    margin: 0px 5px;
    color: #e8eaed;
    text-decoration: none;
    font-size: 14px;
    font-family: arial, sans-serif;
    &:hover {
      text-decoration: underline;
    }
  }
`;
