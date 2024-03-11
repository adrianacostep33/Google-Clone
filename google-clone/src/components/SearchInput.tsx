import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import mic from "../assets/Google_mic.svg";
import {
  InputWrapper,
  StyledSearchIcon,
  ButtonContainer,
} from "./SearchInput.Styled";

const SearchInput = () => {
  return (
    <form>
      <InputWrapper>
        <StyledSearchIcon />
        <input type="text" />
        <Tooltip title="Search by voice">
          <img src={mic} alt="mic" style={{ width: "24px", height: "24px" }} />
        </Tooltip>
      </InputWrapper>
      <ButtonContainer>
        <Button variant="outlined" type="submit">
          Google Search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </ButtonContainer>
    </form>
  );
};

export default SearchInput;
