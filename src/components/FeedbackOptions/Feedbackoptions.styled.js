import styled from "@emotion/styled";

export const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${(props) => props.theme.colors.ButtonColor};
  border-radius: 4px;
  border-color: ${(props) => props.theme.colors.TextColor};
  color: ${(props) => props.theme.colors.TextColor};
  font-family: "Lobster", cursive;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  cursor: pointer;
  transition: ${(props) =>
      `transform${props.theme.colors.animation} ${props.theme.colors.time}`},
    ${(props) =>
      `box-shadow${props.theme.colors.animation} ${props.theme.colors.time}`};

  &:hover,
  &:focus {
    box-shadow: ${(props) => `0 0 10px${props.theme.colors.white}`};
    transform: scale(1.1);
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
