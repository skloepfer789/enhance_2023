import { createGlobalStyle } from "styled-components";

export const EnhanceOrange = `#fc6800`;
export const EnhanceBlue = `#06245d`;
//original blue 051c43
export const EnhancePurple = `#890c4d`;

const GlobalStyle = createGlobalStyle `
    html, body {
        height: 100vh;
    }
    body {
        font-family: 'Open Sans', sans-serif;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }

    a {
        font-style: none;
        &:hover {
            opacity: 0.8;
            cursor: pointer;
        }
    }

    p {
        size: 35px;
        font-weight: 300;
        margin: 30px 0 40px 0;
        line-height: 40px;
    }

    p em {
        color: ${EnhanceBlue};
        font-weight: 800;
        font-style: normal;
    }

    .footerFont {
        size: 18px;
        color: white;
        font-weight: 300;
    }

    * {
        box-sizing: border-box;
    }

    h1{
        size: 60px;
        font-weight: 300;
        color: black;
    }
    .knockout {
        size: 60px;
        font-weight: 300;
        color: white;

        p em {
            color: ${EnhanceOrange};
        }
    }
    h1 em {
        size: 60px;
        color: ${EnhanceOrange};
        font-weight: 800;
        font-style: normal;
    }

    h5 {
        font-weight: 800;
        font-size: 20;
        color: white;
    }

    .sectionHeading {
        margin: 0 0 0 auto;
        padding: 0;
        display: inline-block;
        
        h2 {
            color: ${EnhanceOrange};
            font-weight: 800;
            font-style: normal;
            font-size: 40px;
            line-height: 20px;
        }
        h2 sub {
            font-weight: 300;
            font-size: 20px;
            line-height: 10px;
            
        }
        .dividerBar {
            height: 1px;
            width: 300px;
            background-color: ${EnhanceOrange};
            margin-bottom: 25px;
            float: left;
        }
        .dividerWhite {
            background-color: white;
        }
        .dividerRight {
            float: right;
        }
        .knockout {
            color: white;
        }
    }

    .textArea {
        width: 60%;
        margin: 0 auto;

    }

    .rightHandText {
        text-align: right;

        p {
            text-align: left;
        }
    }

    .PrimaryButton {
        padding: 10px;
        margin-top: 15px;
        font-size: 50;
        font-weight: 800;
        color: #fff;
        background: ${EnhanceBlue};
        border: 2px solid ${EnhanceBlue};
        text-decoration: none;

        &:hover {
            color: ${EnhanceBlue};
            background: #fff;
        }
    }
    .KnockoutButton {
        padding: 10px;
        margin-top: 15px;
        font-size: 50;
        font-weight: 800;
        color: #fff;
        background: none;
        border: 2px solid white;
        text-decoration: none;

        &:hover {
            color: ${EnhanceBlue};
            background: #fff;
        }
    }
`;

export default GlobalStyle;