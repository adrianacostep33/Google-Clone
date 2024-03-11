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
`;

export const LogoContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 260px;
  img {
    object-fit: contain;
    height: 92px;
  }
`;

export const MainContainer = styled("main")`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FooterContainer = styled("div")`
  margin-top: 250px;
  width: 60px;
  height: 60px;
`;
