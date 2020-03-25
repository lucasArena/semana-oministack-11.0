import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    * {
        margin: 0;
        outline: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px 'Roboto', sans-serif;
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;
    }

    form {
        input {
            width: 100%;
            height: 60px;
            color: #333;
            border: 1px solid #dcdce3;
            border-radius: 8px;
            padding: 0 24px;
        }
        
    }

    input, button, textarea {
        font: 400 18px 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;