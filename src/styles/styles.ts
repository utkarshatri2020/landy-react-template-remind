import { COLOR_WHITE, COLOR_DARK_BLUE } from "helpers/colorPalette";
import { devices } from "helpers/mediaQueries";
import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Inter Regular";
        src: url("/fonts/Inter-Regular.ttf") format("truetype");
        font-style: normal;
    }

    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: ${COLOR_WHITE};
        overflow-x: hidden;
        font-family: 'Inter Regular', Roboto, Arial, sans-serif;
    }


    html {
      scroll-behavior: smooth;
    }

    a {
      text-decoration: none;
      text-align: initial;
      outline: none;
      font-size: 1.125rem;
    }

    button {
      padding: 0;
      line-height: inherit;
      color: inherit;
      cursor: pointer;
    }

    input,
    textarea {
      border: 0;
      outline: none;
      width: 100%;  
      padding: 1rem 1.25rem;
    }

    h2, h3, h4, h5 {
      line-height: 35px;
    }

    h1, h2 {
      font-weight: 600;
      letter-spacing: 0.025rem;
      line-height: 1.18;
      margin-bottom: 1rem;
      font-size: 3.5rem;
      color: ${COLOR_DARK_BLUE};

      @media ${devices.tabletL} {
        font-size: 2.75rem;
      }

      @media ${devices.mobileL} {
        font-size: 1.5rem;
      }
    }

    input, textarea {
      border-radius: 0.25rem;
      padding: 2rem 0 2rem 1rem;
      width: 100%;
      font-family: inherit;
      font-size: 1.125rem;

      @media ${devices.mobileL} {
        padding: 2rem 0 2rem 0.5rem;
      }
    }

    button, input, textarea {
      outline: none;
      border: 0;
    }

    h3, h4 {
      margin-bottom: 1rem;
      line-height: 1.18;
      font-weight: 600;
      font-size: 1.5rem;      
      color: ${COLOR_DARK_BLUE};

      @media ${devices.mobileL} {
        font-size: 1.25rem;      
      }
    }

    p, li {
      line-height: 26px;
    }

    p, span, button {
      font-weight: 400;
      font-size: 1.125rem;
    }

    ul, h2 {
      list-style: none;
      margin: 0;
      padding: 0;
    }
`;
