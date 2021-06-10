import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
    :root {
        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #ffffff
        --background: #F0F2F5;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Configuração dos efeitos visuais 
    // Desktop font-size: 16px
    html{
        @media (max-width:1080px) {
            font-size: 93.75%; //font-size: 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //font-size:14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    button {
        cursor: pointer
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`