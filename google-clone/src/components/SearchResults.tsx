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
          <Link to={result.url}>
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
                      {result.url}
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
                    color: "#c58af9",
                    fontWeight: "400",
                    fontSize: "1.5rem",
                    marginTop: "18px",
                  }}
                >
                  {result.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "16px",
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
          </Link>
        );
      })}
    </SearchResultsContainer>
  );
};

export default SearchResults;
