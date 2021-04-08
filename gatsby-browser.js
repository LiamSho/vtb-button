import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Option from './src/options'
import Theme from './src/theme/theme'

const GlobalStyles = createGlobalStyle `
    body {
        background-image: ${doBackgroundExist(Option.BackgroungImagePath)};
        background-color: ${Option.BackgroundColor};
        background-repeat: no-repeat;
        background-position: top center;
        background-attachment: fixed;
        background-size: cover;
    }

    .audio-button {
        color: ${Option.ButtonColor};
        border-color: ${Option.ButtonBorderColor};
        background-color: ${Option.ButtonBackgroundColor};
        font-weight: 500;
        border-radius: 0.5rem;
        padding: 0.3rem;
        margin-left: 0.25rem;
        margin-right: 0.25rem;
        margin-bottom: 0.35rem;
        margin-top: 0.35rem;
    }

    .audio-button:hover {
        box-shadow: 0 0 0 .25rem ${Option.ButtonBoxShadow};
    }
    
    .audio-button:focus {
        outline: 0;
        box-shadow: 0 0 0 .25rem ${Option.ButtonBoxShadow};
    }
`

function doBackgroundExist(path) {
    if(path === "") {
        return ""
    }
    else {
        return `url(./static/${path});`
    }
}

export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
)
