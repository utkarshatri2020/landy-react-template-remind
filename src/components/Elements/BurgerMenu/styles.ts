import styled from "styled-components";
import { COLOR_BLACK, COLOR_WHITE } from "helpers/colorPalette";
import { StringProps } from "helpers/types";

export const BurgerMenuContainer = styled.div<StringProps>`
  width: 27px;
  display: flex;
  position: relative;
  cursor: pointer;
  min-height: 40px;
  align-items: center;
  margin-top: -10px;

  span {
    height: 3px;
    width: 100%;
    background-color: ${COLOR_BLACK};
    transition: 0.8s ease;
    border-radius: 0px;
    position: absolute;
  }
`;

export const FirstLine = styled.span<StringProps>`
  color: ${COLOR_WHITE};
  transform: ${({ isOpen }) =>
    `translate3d(0,${isOpen ? "8px" : "0px"},0) rotate(${
      isOpen ? `45deg` : "0"
    })`};
`;

export const SecondLine = styled.span<StringProps>`
  color: ${COLOR_WHITE};
  transform: ${({ isOpen }) =>
    `translate3d(0,${isOpen ? "8px" : "8px"},0) rotate(${
      isOpen ? `-45deg` : "0"
    })`};
`;

export const ThirdLine = styled.span<StringProps>`
  color: ${COLOR_WHITE};
  transform: ${({ isOpen }) =>
    `translate3d(0,${isOpen ? "8px" : "16px"},0) rotate(${
      isOpen ? `-45deg` : "0"
    })`};
`;
