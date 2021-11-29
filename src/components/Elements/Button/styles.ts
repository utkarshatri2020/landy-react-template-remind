import styled from "styled-components";
import {
  COLOR_BLACK,
  COLOR_DARK_BLUE,
  COLOR_WHITE,
} from "helpers/colorPalette";

interface ButtonContainerProps {
  variant: string;
  hasArrow?: boolean;
  isLoading?: boolean;
}

export const ArrowContainer = styled.div`
  width: 32px;
  height: 32px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  margin-left: 24px;
`;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ variant }) =>
    variant === "primary" ? COLOR_DARK_BLUE : COLOR_WHITE};
  padding: 0 28px;
  box-sizing: border-box;
  transition: 0.3s background-color, 0.3s transform;
  border-radius: 32px;
  min-width: 154px;
  height: 59px;
  align-items: center;
  display: flex;
  justify-content: center;

  span {
    color: ${({ variant }) =>
      variant === "primary" ? COLOR_WHITE : COLOR_BLACK};
    margin: 0;
    font-size: 1rem;
  }

  ${ArrowContainer} {
    background-color: ${COLOR_WHITE};
    svg {
      path {
        fill: ${COLOR_DARK_BLUE};
      }
    }
  }
`;

export const InlineFlex = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
