import styled from "styled-components";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";

export const LowerHeaderContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px 15px 0px;
`;

export const LowerHeaderLeft = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 100px;
  }
`;

interface StyledLinkProps {
  active?: string;
}

export const StyledOptions = styled("div")<StyledLinkProps>`
  background-color: ${(props) => (props.active === "true" ? "#394457" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 1px solid #3c4043;
  box-sizing: border-box;
  border-radius: 20px;
  padding: 0px 14px;

  a {
    text-decoration: none;
    font-size: 0.875rem;
    font-family: Roboto, arial, sans-serif;
    color: ${(props) => (props.active === "true" ? "#8ab4f8" : "#f1f3f4")};
    &:hover {
      text-decoration: underline;
    }
    &:active {
      background-color: #394457;
    }
`;

export const LowerLeftContaier = styled("div")``;

export const LowerHeaderMiddle = styled("div")`
  display: flex;
  align-items: center;
  justify-self: end;
`;

export const LowerHeaderRight = styled("div")`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled("button")`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9aa0a6;
  font-family: Google Sans, arial, sans-serif;
  font-size: 14px;
  padding: 0 9px 0 12px;
  white-space: nowrap;
  text-transform: none;
  border: none;
  border-left: 1px solid #9aa0a6;
`;

export const Listbox = styled("ul")`
  font-family: Google Sans, arial, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 16px 0px;
  min-width: 70px;
  overflow: auto;
  outline: 0px;
  background: #202124;
  shadow: #111111;
  color: #9aa0a6;
  z-index: 1;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }

  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out,
      transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
`;

export const MenuItem = styled(BaseMenuItem)`
  list-style: none;
  padding: 6px 16px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &:hover {
    background: #303134;
  }
`;

interface MenuButtonProps {
  isOpen?: boolean;
  onClick?: () => void;
}

export const MenuButton = styled(BaseMenuButton)<MenuButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  color: #9aa0a6;
  font-family: Google Sans, arial, sans-serif;
  font-size: 14px;
  padding: 0 9px 0 12px;
  white-space: nowrap;
  text-transform: none;
  border: none;
  background-color: ${(props) =>
    props.isOpen === true ? "#394457" : "transparent"};
  color: ${(props) => (props.isOpen == true ? "#8ab4f8" : "#9aa0a6")};

  p {
    margin: 9px 9px;
  }
`;
