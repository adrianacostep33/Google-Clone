import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import mic from "../assets/Google_mic.svg";
import {
  InputWrapper,
  StyledSearchIcon,
  ButtonContainer,
} from "./SearchInput.Styled";

const SearchInput = ({ showButtons = false }) => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate(`/search?${searchInput}`);
  };
  return (
    <form>
      <InputWrapper>
        <StyledSearchIcon />
        <input
          type="text"
          value={searchInput}
          onChange={(e) => handleInputChange(e)}
        />
        <Tooltip title="Search by voice">
          <img src={mic} alt="mic" style={{ width: "24px", height: "24px" }} />
        </Tooltip>
      </InputWrapper>
      {showButtons && (
        <ButtonContainer>
          <Button
            variant="outlined"
            type="submit"
            onClick={(e) => handleSearch(e)}
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </ButtonContainer>
      )}
    </form>
  );
};

export default SearchInput;
