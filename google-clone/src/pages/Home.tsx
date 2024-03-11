import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";

import { HomePageContainer, HeaderContainer, LogInButton } from "./Home.Styled";
import { useState } from "react";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <HomePageContainer>
      <HeaderContainer>
        <Link to="/gmail">Gmail</Link>
        <Link to="/Images">Images</Link>
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
    </HomePageContainer>
  );
};

export default Home;
