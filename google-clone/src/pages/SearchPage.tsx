import { IconButton, Tooltip } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchInput from "../components/SearchInput";
import { LogInButton } from "./Home.Styled";

import {
  HeaderContainer,
  LogoContainer,
  LowerHeader,
  LowerHeaderLeft,
  LowerHeaderMiddle,
  LowerHeaderRight,
  SearchInputContainer,
  SearchPageContainer,
  StyledButton,
  StyledOptions,
  UpperHeader,
  UpperHeaderLeft,
  UpperHeaderRight,
} from "./SearchPage.Styled";
import AppsIcon from "@mui/icons-material/Apps";
import { useEffect, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import SearchResults from "../components/SearchResults";

export interface Result {
  id: string;
  url: string;
  title: string;
  name: string;
  image?: string;
  description?: string;
}

const SearchPage = () => {
  const [results, setResults] = useState<Result[]>([]);

  const { inputValue, setInputValue } = useSearchContext();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");

  const db = getFirestore();

  const getDataFromFirestore = async () => {
    const q = query(
      collection(db, "results"),
      where("lowercaseTitle", ">=", value!.toLowerCase()),
      where("lowercaseTitle", "<=", value!.toLowerCase() + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    const documents: Result[] = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      documents.push({
        id: doc.id,
        url: data.url,
        title: data.title,
        name: data.name,
        description: data.description,
        image: data.image,
      });
    });
    setResults(documents);
  };

  useEffect(() => {
    if (!value) {
      setInputValue("");
      return;
    }
    getDataFromFirestore();
    setInputValue(value);
  }, [value]);

  return (
    <SearchPageContainer>
      <HeaderContainer>
        <UpperHeader>
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
        </UpperHeader>

        <LowerHeader>
          <LowerHeaderLeft>
            <StyledOptions>
              <Link to="/all">All</Link>
            </StyledOptions>

            <StyledOptions>
              <Link to="/news">News</Link>
            </StyledOptions>

            <StyledOptions>
              <Link to="/shopping">Shopping</Link>
            </StyledOptions>

            <StyledOptions>
              <Link to="/images">Images</Link>
            </StyledOptions>

            <StyledOptions>
              <Link to="/maps">Maps</Link>
            </StyledOptions>

            <StyledOptions>
              <Link to="/more">More</Link>
            </StyledOptions>
          </LowerHeaderLeft>

          <LowerHeaderMiddle>
            <StyledButton variant="text">
              <p>All filters</p>
              <ArrowDropDownIcon />
            </StyledButton>

            <StyledButton variant="text">Tools</StyledButton>
          </LowerHeaderMiddle>

          <LowerHeaderRight>
            <StyledButton variant="text">
              <p>SafeSearch</p>
              <ArrowDropDownIcon />
            </StyledButton>
          </LowerHeaderRight>
        </LowerHeader>
      </HeaderContainer>
      <SearchResults results={results} />;
    </SearchPageContainer>
  );
};

export default SearchPage;
