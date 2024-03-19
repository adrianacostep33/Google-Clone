import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchContext } from "../contexts/SearchContext";
import SearchResults from "../components/SearchResults";
import getDataByDescription from "../utils/getDataByDescription";
import UpperHeader from "../components/UpperHeader";
import LowerHeader from "../components/LowerHeader";
import { HeaderContainer, SearchPageContainer } from "./SearchPage.Styled";

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

  const { setInputValue } = useSearchContext();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("key");

  useEffect(() => {
    if (!value) {
      setInputValue("");
      return;
    }

    const fetchData = async () => {
      const data = await getDataByDescription(value.split(/\s+/), tag);
      setResults(data);
      setInputValue(value);
    };

    fetchData();

    setInputValue(value);
  }, [value, tag, setInputValue]);

  return (
    <SearchPageContainer>
      <HeaderContainer>
        <UpperHeader />
        <LowerHeader tag={tag} setTag={setTag} />
      </HeaderContainer>
      <SearchResults results={results} />
    </SearchPageContainer>
  );
};

export default SearchPage;
