import React, { Dispatch, SetStateAction, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu, MenuListboxSlotProps } from "@mui/base/Menu";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import FilterButton from "./FilterButton";
import tagEnum from "../enums/tagEnum";
import {
  Listbox,
  LowerHeaderContainer,
  LowerHeaderLeft,
  LowerHeaderMiddle,
  LowerHeaderRight,
  MenuButton,
  MenuItem,
  StyledButton,
} from "./LowerHeader.Styled";

type LowerHeaderProps = {
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
};

const LowerHeader = ({ tag, setTag }: LowerHeaderProps) => {
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);
  const [safeSearchIsOpen, setSafeSearchIsOpen] = useState(false);

  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  const handleFiltersButtonClick = () => {
    setFiltersIsOpen(!filtersIsOpen);
  };
  const handleSafeSearchButtonClick = () => {
    setSafeSearchIsOpen(!safeSearchIsOpen);
  };

  return (
    <LowerHeaderContainer>
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
        <Dropdown>
          <MenuButton isOpen={filtersIsOpen} onClick={handleFiltersButtonClick}>
            <p>All filters</p>
            <ArrowDropDownIcon />
          </MenuButton>
          <Menu slots={{ listbox: AnimatedListbox }}>
            <MenuItem onClick={createHandleMenuClick("Profile")}>
              Images
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick("Videos")}>
              Videos
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick("News")}>News</MenuItem>
            <MenuItem onClick={createHandleMenuClick("Books")}>Books</MenuItem>
            <MenuItem onClick={createHandleMenuClick("Finance")}>
              Finance
            </MenuItem>
          </Menu>
        </Dropdown>

        <StyledButton>Tools</StyledButton>
      </LowerHeaderMiddle>

      <LowerHeaderRight>
        <Dropdown>
          <MenuButton
            isOpen={safeSearchIsOpen}
            onClick={handleSafeSearchButtonClick}
          >
            <p>SafeSearch</p>
            <ArrowDropDownIcon />
          </MenuButton>
          <Menu slots={{ listbox: AnimatedListbox }}>
            <MenuItem onClick={createHandleMenuClick("Profile")}>
              Filter explicit results
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick("Videos")}>
              Blur explicit images
            </MenuItem>
            <MenuItem onClick={createHandleMenuClick("News")}>Off</MenuItem>
          </Menu>
        </Dropdown>
      </LowerHeaderRight>
    </LowerHeaderContainer>
  );
};

export default LowerHeader;

const AnimatedListbox = React.forwardRef(function AnimatedListbox(
  props: MenuListboxSlotProps,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  const { ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      "The `AnimatedListbox` component cannot be rendered outside a `Popup` component"
    );
  }

  const verticalPlacement = popupContext.placement.split("-")[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  );
});
