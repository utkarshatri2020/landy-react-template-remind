import styled, { createGlobalStyle } from "styled-components";
import { devices } from "helpers/mediaQueries";
import { StringProps } from "helpers/types";
import { COLOR_DARK_BLUE, COLOR_WHITE } from "helpers/colorPalette";

const AnimateSlideBurger = styled.div`
  &.burgerslide-transition-enter {
    transform: translateX(50%);
    -webkit-transform: translateX(50%);
    -moz-transform: translateX(50%);
  }
  &.burgerslide-transition-enter-active {
    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
    transition: transform 0.4s ease-in;
    -webkit-transition: -webkit-transform 0.4s ease-in;
    -moz-transition: -moz-transform 0.4s ease-in;
  }
  &.burgerslide-transition-exit {
    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
  }
  &.burgerslide-transition-exit-active {
    transform: translateX(100%);
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    transition: transform 0.5s ease-in;
    -webkit-transition: -webkit-transform 0.5s ease-in;
    -moz-transition: -moz-transform 0.5s ease-in;
  }
`;

export const BurgerOuterScroll = createGlobalStyle<StringProps>`
  body {
    overflow-y: ${(p) => (p.shouldHide ? "hidden" : "auto")};       
  }

  section {
    transition: all 0.25s cubic-bezier(0.8, 0, 0.2, 1);
  }
`;

export const BurgerSidebarWrapper = styled(AnimateSlideBurger)`
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
  position: absolute;
`;

export const BurgerSidebarOverlay = styled.div<StringProps>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 99;
  visibility: ${(p) => (p.shouldShow ? "visible" : "hidden")};
  transition: all 0.25s cubic-bezier(0.8, 0, 0.2, 1);
`;

export const BurgerSidebarContainer = styled.div<StringProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  vertical-align: middle;
  background-color: ${COLOR_WHITE};
  box-shadow: 0 -2px 6px ${COLOR_DARK_BLUE};
  max-width: 30rem;
  width: 100%;
  height: 100vh;
  padding: 4.5rem 4rem 4rem;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;

  svg {
    path {
    }
  }

  @media ${devices.mobileL} {
    max-width: 100vw;
    overflow-y: auto;
    padding: 4.5rem 0;
  }
`;
