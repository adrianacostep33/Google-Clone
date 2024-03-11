import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

export const InputWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 20px;
  padding: 22px 24px;
  margin: 0 auto;
  margin-top: 24px;
  max-width: 560px;
  border: 0.1px solid rgb(95, 99, 104);
  border-radius: 999px;
  input {
    flex: 1;
    background-color: ${({ theme }) => theme?.body?.darkColor};
    border: none;
    padding: 10px 24px;
    font-size: medium;
    color: white;
    &:focus {
      outline-width: 0;
    }
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  color: #9aa0a6;
  font-size: 24px;
  cursor: pointer;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  button {
    min-height: 32px;
    min-width: 54px;
    text-transform: inherit;
    font-size: 14px;
    font-family: arial, sans-serif;
    line-height: 27px;
    background-color: #303134;
    color: #e8eaed;
    border: 1px solid #303134;
    border-radius: 4px;
    padding: 0 16px;
    margin: 11px 4px;
    &:hover {
      border: 0.5px solid lightgray;
      border-radius: 4px;
      background-color: #303134;
    }
  }
`;

// export const Button = styled("button")`
//   background-color: #d30000;
// `;
