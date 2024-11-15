import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2xp ${props => props.theme['green-500']};
    }

    body {
        background: ${props => props.theme['gray-50']};
        color: ${props => props.theme.black};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    body, html {
        -webkit-font-smoothing: antialiased;  
    }    
`;




