import { styled } from "@mui/system";

interface StyledLinkProps {
  active?: string;
  filter?: string;
}

export const StyledOptions = styled("div")<StyledLinkProps>`
  background-color: ${(props) => (props.active === "true"  ? "#394457" : "")};
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
