import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { StyledOptions } from "./FilterButton.Styled";
import { useSearchContext } from "../contexts/SearchContext";
import tagEnum from "../enums/tagEnum";

type FilterButtonProps = {
  active?: boolean;
  tag: string;
  filter: string;
  label: string;
  setTag: (tag: string) => void;
};

const FilterButton = ({
  active,
  tag,
  filter,
  label,
  setTag,
}: FilterButtonProps) => {
  const { inputValue } = useSearchContext();

  const handleTags = (tag: string) => {
    setTag(tag);
  };

  const handleRemoveTag = () => {
    setTag(tagEnum.All);
  };

  return (
    <div>
      {tag === filter ? (
        <StyledOptions active={active ? "true" : "false"}>
          {active && (
            <ClearIcon
              sx={{
                color: "#8ab4f8",
                width: "16px",
                height: "16px",
                fontWeight: "18px",
                marginRight: "6px",
              }}
            />
          )}
          <Link
            to={`${window.location.pathname}?key=${inputValue}`}
            onClick={handleRemoveTag}
          >
            {label}
          </Link>
        </StyledOptions>
      ) : (
        <StyledOptions>
          <Link
            to={`${window.location.pathname}?key=${inputValue}&${filter}`}
            onClick={() => handleTags(filter)}
          >
            {label}
          </Link>
        </StyledOptions>
      )}
    </div>
  );
};

export default FilterButton;
