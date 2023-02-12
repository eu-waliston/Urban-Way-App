import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <SECTION>
            <nav class="canva-toggler">
                <a href="/">
                    <img src={require("./img/logo.png")} class="logo-img" alt="logo" />
                </a>
                <ul>
                    <li className="cad__item">
                        <a href="/cadastro" className="cad__item">
                           <Link to={"/register"} style={{textDecoration: "none", color: "#fff"}}>
                            <i class="bi bi-person"></i> Cadastre-se
                           </Link>
                        </a>
                    </li>

                </ul>
            </nav>
            <div id="login__menu">
                <h1 class="login__h1">Login</h1>
                <div class="form__control">
                    <div class="form__item">
                        <label for="username">Username: </label>
                        <input type="text" />
                    </div>
                    <div class="form__item f2">
                        <label for="username">Senha: </label>
                        <input type="text" />
                    </div>
                    <div class="form__btn">
                        <button type="submit" class="btn__ct">
                            <Link to={"/"} className="fim">
                                <i class="bi bi-door-open"></i> Login
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </SECTION>
    )
}
const SECTION = styled.section`
/* LOGIN PAGE */

  background-color: var(--side-color);
  height: 96vh;
  width: 100%;

    .logo-img{
        position: relative;
        margin-left: 42%;
        width: 300px
    }

    .login__h1 {
    color: #fff;
    text-align: center;
    position: relative;
    top: 13%;
    font-size: 50px;
    font-family: var(--font--title);
    }

    .form__control {
    background-color: #fff;
    height: 30vh;
    width: 30%;
    position: relative;
    margin: 0 auto;
    top: 20%;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.267);

    text-align: center;
    }

    .form__item {
    position: relative;
    top: 5%;
    }

    .form__btn {
    position: relative;
    top: 20%;
    }

    label {
    font-weight: bold;
    }

    .f2 {
    position: relative;
    left: 3%;
    margin-top: 5%;
    }
    input {
    width: 250px;
    height: 50px;
    font-size: 20px;
    }

    .btn__ct {
    width: 150px;
    height: 50px;
    font-size: 20px;
    position: relative;
    }

    .cad {
    width: 200px;
    position: relative;
    left: 5%;
    }

    .cad__item {
        color: #fff;
        text-decoration: none;
        list-style: none;
        font-size: 28px;
        position: relative;
        display: block;
        top: 220px;
        margin-left: 25%;
    }

    .fim {
        text-decoration: none;
        color: #000;
    }
`
export default Login;