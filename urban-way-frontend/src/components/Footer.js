import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FOOTER>
            <h1 id="footer__h1">WeSantos</h1>
            <i class="bi bi-facebook ss"></i>
            <i class="bi bi-instagram ss"></i>
            <i class="bi bi-reddit ss"></i>
        </FOOTER>
    )
}

const FOOTER = styled.div`

    display: flex;
    text-align: center;
    position: relative;
    margin-left: 42%;
    cursor: pointer;
    top: -15px;
    

    #footer__h1 {
    color: #fff;
    font-family: "Roboto", sans-serif;
    position: relative;
    text-align: center;
    font-size: 20px;
    }

    .ss {
    font-size: 20px;
    margin-left: 15px;
    text-align: center;
    color: #fff;
    }
`
export default Footer;