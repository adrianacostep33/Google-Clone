import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import mic from "../assets/Google_mic.svg";
import {
  InputWrapper,
  StyledSearchIcon,
  ButtonContainer,
} from "./SearchInput.Styled";
import { useSearchContext } from "../contexts/SearchContext";

const SearchInput = ({ showButtons = false }) => {
  const navigate = useNavigate();
  const { inputValue, setInputValue } = useSearchContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSearch = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    navigate(`/search?key=${inputValue}`);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSearch(e);
      }}
    >
      <InputWrapper>
        <StyledSearchIcon />
        <input
          type="text"
          value={inputValue}
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
