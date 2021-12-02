import styled from "styled-components";
import { devices } from "helpers/mediaQueries";
import { COLOR_DARK_BLUE, COLOR_WHITE } from "helpers/colorPalette";

export const ScrollUpContainer = styled.div<any>`
  padding: 12px 13px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background-color: ${COLOR_DARK_BLUE};
  text-align: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  opacity: ${({ show }) => (show ? "1" : "0")};
  display: flex;
  border-radius: 50%;

  svg {
    width: 15px;
    height: 15px;

    path {
      stroke: ${COLOR_WHITE};
    }

    @media ${devices.tabletM} {
      width: 20px;
      height: 20px;
    }
  }

  @media ${devices.tabletL} {
    bottom: 20px;
    padding: 10px;
  }

  @media ${devices.mobileL} {
    right: 20px;
    padding: 10px;
  }
`;
