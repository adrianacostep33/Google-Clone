import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import SearchInput from "../components/SearchInput";
import {
  HomePageContainer,
  HeaderContainer,
  LogInButton,
  LogoContainer,
  MainContainer,
  FooterContainer,
  FooterLeft,
  FooterRight,
  UpperFooter,
  LowerFooter,
} from "./Home.Styled";

// import { seedFirestore } from "../seedFirestore";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   // Call the seed function when the component mounts
  //   seedFirestore();
  // }, []);

  return (
    <HomePageContainer>
      <HeaderContainer>
        <Link to="/gmail">Gmail</Link>
        <Link to="/images">Images</Link>
        <Tooltip title="Google apps">
          <IconButton
            sx={{
              borderRadius: 0,
              ".MuiTouchRipple-ripple .MuiTouchRipple-child": {
                borderRadius: 0,
                backgroundColor: "red",
              },
            }}
          >
            <AppsIcon
              sx={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.87)" }}
            />
          </IconButton>
        </Tooltip>
        {loggedIn ? (
          <Tooltip title="Google Account">
            <Avatar
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#8ab4f8",
                color: "white",
                cursor: "pointer",
                marginRight: "8px",
              }}
            >
              JP
            </Avatar>
          </Tooltip>
        ) : (
          <LogInButton>
            <p>Sign in</p>
          </LogInButton>
        )}
      </HeaderContainer>

      <MainContainer>
        <LogoContainer>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="google-logo"
          />
        </LogoContainer>
        <div>
          <SearchInput showButtons={true} />
        </div>
      </MainContainer>

      <FooterContainer>
        <UpperFooter>
          <p>Romania</p>
        </UpperFooter>
        <LowerFooter>
          <FooterLeft>
            <Link to="/about">About</Link>
            <Link to="/advertising">Advertising</Link>
            <Link to="/business">Business</Link>
            <Link to="/search/works">How Search works</Link>
          </FooterLeft>

          <FooterRight>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/settings">Settings</Link>
          </FooterRight>
        </LowerFooter>
      </FooterContainer>
    </HomePageContainer>
  );
};

export default Home;
