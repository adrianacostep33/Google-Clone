import { styled } from "@mui/system";

const SearchResultsContainer = styled("div")`
  max-width: 650px;
  margin-left: 107px;
  // margin-bottom: 100px;
  top: 140px;
  position: fixed;
  bottom: 0;
  width: 100vw;
  // height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const SearchResultsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 48px 0;
`;

const SearchResultsTitle = styled("div")`
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    object-fit: contain;
    height: 28px;
    width: 28px;
    margin-right: 10px;
    border: 1px solid #9aa0a6;
    border-radius: 50%;
  }
  &:hover {
    text-decoration: underline;
    color: #bdc1c6;
  }
  a {
    color: #bdc1c6;
    font-family: arial, sans-serif;
    font-size: 12px;
    white-space: nowrap;
  }
`;

export { SearchResultsContainer, SearchResultsWrapper, SearchResultsTitle };
