import { IconButton, Tooltip } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import SearchInput from "./SearchInput";
import { LogInButton } from "../pages/Home.Styled";
import {
  LogoContainer,
  SearchInputContainer,
  UpperHeaderContainer,
  UpperHeaderLeft,
  UpperHeaderRight,
} from "./UpperHeader.Styled";

const UpperHeader = () => {
  return (
    <UpperHeaderContainer>
      <UpperHeaderLeft>
        <LogoContainer>
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
            alt="google-logo"
          />
        </LogoContainer>
        <SearchInputContainer>
          <SearchInput showButtons={false} />
        </SearchInputContainer>
      </UpperHeaderLeft>

      <UpperHeaderRight>
        <Tooltip title="Settings">
          <IconButton>
            <SettingsOutlinedIcon
              sx={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.87)" }}
            />
          </IconButton>
        </Tooltip>

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

        <LogInButton>
          <p>Sign in</p>
        </LogInButton>
      </UpperHeaderRight>
    </UpperHeaderContainer>
  );
};

export default UpperHeader;
