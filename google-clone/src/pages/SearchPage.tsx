import { IconButton, Tooltip } from "@mui/material";
import { useLocation } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchInput from "../components/SearchInput";
import { LogInButton } from "./Home.Styled";
import tagEnum from "../enums/tagEnum";

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
import FilterButton from "../components/FilterButton";

export interface Result {
  id: string;
  url?: string;
  title?: string;
  name?: string;
  image?: string;
  description?: string;
  tags?: string[];
}

const SearchPage = () => {
  const [results, setResults] = useState<Result[]>([]);
  const [tag, setTag] = useState<string>("all");

  console.log({ tag });

  const { setInputValue } = useSearchContext();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");

  const db = getFirestore();
  const resultsCollection = collection(db, "results");

  const getDataFromFirestore = async () => {
    const q = query(
      resultsCollection,
      where("lowercaseTitle", ">=", value!.toLowerCase()),
      where("lowercaseTitle", "<=", value!.toLowerCase() + "\uf8ff"),
      where("tags", "array-contains", tag)
    );
    const querySnapshot = await getDocs(q);

    const documents: Result[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const newDocument = {
        id: doc.id,
        url: data.url,
        title: data.title,
        name: data.name,
        description: data.description,
        image: data.image,
      };

      if (isDuplicate(newDocument, documents)) return;

      documents.push(newDocument);
    });

    // setResults(documents);
  };

  const isDuplicate = (newDocument: Result, documents: Result[]) => {
    return documents.some((doc) => {
      doc.description === newDocument.description;
    });
  };

  const getDataByDescription = async (searchValue: string[]) => {
    const documents: Array<Result> = [];
    for (const element of searchValue) {
      const q = query(
        resultsCollection,
        where("searchableDescription", "array-contains", element.toLowerCase())
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const data = doc.data();

        const newDocument = {
          id: doc.id,
          url: data.url,
          title: data.title,
          name: data.name,
          description: data.description,
          image: data.image,
          tags: data.tags,
        };

        if (isDuplicate(newDocument, documents)) return;

        console.log(newDocument.tags);

        for (const docTag of newDocument.tags) {
          // console.log({ docTag });

          if (docTag === tag) {
            documents.push(newDocument);
          }
        }
      });
    }

    setResults(documents);
  };

  useEffect(() => {
    if (!value) {
      setInputValue("");
      return;
    }
    getDataByDescription(value.split(/\s+/));
    getDataFromFirestore();
    setInputValue(value);
  }, [value, tag]);

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
            <FilterButton
              filter={tagEnum.All}
              label="All"
              tag={tag}
              setTag={setTag}
            />
            <FilterButton
              active={tag === tagEnum.News}
              filter="news"
              label="News"
              tag={tag}
              setTag={setTag}
            />
            <FilterButton
              active={tag === tagEnum.Shopping}
              filter="shopping"
              label="Shopping"
              tag={tag}
              setTag={setTag}
            />
            <FilterButton
              active={tag === tagEnum.Images}
              filter="images"
              label="Images"
              tag={tag}
              setTag={setTag}
            />
            <FilterButton
              active={tag === tagEnum.Maps}
              filter="maps"
              label="Maps"
              tag={tag}
              setTag={setTag}
            />
            <FilterButton
              active={tag === tagEnum.More}
              filter="more"
              label="More"
              tag={tag}
              setTag={setTag}
            />
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
      <SearchResults results={results} />
    </SearchPageContainer>
  );
};

export default SearchPage;
