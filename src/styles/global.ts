import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
    :root {
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;
        
        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #ffffff;
        --background: #F0F2F5;

        --input-background: #e7e9ee;
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
        -webkit-font-smoothing: antialiased; // Utilizado para melhorar a visualização da font da aplicação
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
        cursor: not-allowed; // Mostra para o cliente que a tag esta desabilitada
    }
    .react-modal-overlay{
        background: rgba(0,0,0,.5);

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 575px;

        background: var(--background);
        position: relative;
        padding: 3rem;
        border-radius: .25rem;
    }

    .react-modal-close{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8)
        }
    }
`