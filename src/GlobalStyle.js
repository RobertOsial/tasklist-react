import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    background-color: ${({ theme }) => theme.color.silver};
}
`