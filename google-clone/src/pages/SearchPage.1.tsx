import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
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
import { useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { Result } from "./SearchPage";

export const SearchPage = () => {
  let [results, setResults] = useState<Result[]>([]);
  const { inputValue, setInputValue } = useSearchContext();
  console.log({ inputValue });

  const db = getFirestore();

  const getDataFromFirestore = async () => {
    console.log("AAA");

    const q = query(
      collection(db, "results"),
      where("title", "==", inputValue)
    );
    console.log({ q });
    const querySnapshot = await getDocs(q);
    console.log({ querySnapshot });

    const documents: Result[] = [];
    querySnapshot.forEach((doc) => {
      console.log({ doc });

      const data = doc.data();
      console.log({ data });

      documents.push({ id: doc.id, url: data.url, title: data.title });
    });
    setResults(documents);
  };

  useEffect(() => {
    getDataFromFirestore();
    console.log("useEffect");
  }, [inputValue]);

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
    </SearchPageContainer>
  );
};
