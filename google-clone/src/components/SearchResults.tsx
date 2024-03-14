import { Result } from "../pages/SearchPage";
import {
  SearchResultsContainer,
  SearchResultsTitle,
  SearchResultsWrapper,
} from "./SearchResults.Styled";
import { Typography, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

interface SearchResultsProps {
  results: Result[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <SearchResultsContainer>
      <Typography
        component="p"
        sx={{
          whiteSpace: "nowrap",
          fontFamily: "Google Sans,Roboto,arial,sans-serif",
          paddingTop: " 8px",
          fontSize: "0.875rem",
          color: "#bdc1c6",
        }}
      >
        About 30 results (0.30 seconds)
      </Typography>

      {results.map<Result[]>((result: Result): any => {
        return (
          <SearchResultsWrapper key={result.id}>
            <div>
              <SearchResultsTitle>
                {result?.image && <img src={result.image} alt="" />}
                <div>
                  <Typography
                    component="p"
                    sx={{
                      color: "#dadce0",
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      lineHeight: "20px",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                  >
                    {result.title}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: "##bdc1c6",
                      fontWeight: "400",
                      fontSize: "0.875rem",
                      textTransform: "none",
                    }}
                  >
                    <Link to={result.url}>{result.url}</Link>
                  </Typography>
                </div>
                <div>
                  <IconButton>
                    <MoreVertIcon
                      sx={{ fontSize: "0.875rem", color: "#bdc1c6" }}
                    />
                  </IconButton>
                </div>
              </SearchResultsTitle>

              <Typography
                variant="h3"
                component="h3"
                sx={{
                  color: "#8ab4f8",
                  fontWeight: "400",
                  fontSize: "20px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                {result.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginTop: "6px",
                  fontSize: "0.875rem",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "normal",
                  color: "#bdc1c6",
                }}
              >
                {result.description}
              </Typography>
            </div>
          </SearchResultsWrapper>
        );
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;
