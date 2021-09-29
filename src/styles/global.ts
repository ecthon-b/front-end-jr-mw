import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --white: #FFFFFF;
    --white-opacity: #80808000;
    
    --black-900: #000000;
    --black-800: ##010101;
    
    --brown-900: #400E0E;

    --red-900: #FF0000;
    --red-opacity-37: #FF000087;
    --red-opacity-4D:#8000004D
    --red-opacity-30: #FF000030;

    --gray-900: #212121BC;
    --gray-100: #00000029;
    --gray-800: #84848D;
    --gray--50: #E5E5EA;

    --yellow-900: #FFB300

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font-size: 16px (Desktop)
html {
    @media (max-width: 1000px) {
        font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

body {
    -webkit-font-smoothing: antialised;
}

button {
    cursor: pointer;
}
`;
