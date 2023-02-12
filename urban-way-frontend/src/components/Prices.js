import React from "react";
import styled from "styled-components";

const Prices = () => {
    return (
        <DIV id="precos">
            <h1 class="precos__h1">preços</h1>
            <p class="precos__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Alias, quas minima accusantium dignissimos ab, voluptate vero ullam, <br />
                repellat aliquam suscipit odio explicabo. Perspiciatis atque nobis, <br />
                delectus aspernatur minima quas Lorem ipsum dolor sit amet consectetur
                adipisicing elit. <br />
                Reprehenderit sed aspernatur placeat repudiandae culpa delectus! Saepe
                itaque?
            </p>

            <div id="cards">
                <div id="c__1">
                    <div class="card_spec">
                        <h1 class="card_title">Free</h1>
                    </div>
                    <div class="card_info">
                        <p>R$0/ mês</p>
                        <p>2 Downloads dia</p>
                        <p>2Mb Limit</p>
                        <p>Sem comentarios</p>
                    </div>
                    <div class="btn_send">
                        <button class="btn btn__1">Entrar</button>
                    </div>
                </div>

                <div id="c__2">
                    <div class="card_spec btn__2">
                        <h1 class="card_title">Premio</h1>
                    </div>
                    <div class="card_info">
                        <p>R$0/ mês</p>
                        <p>2 Downloads dia</p>
                        <p>2Mb Limit</p>
                        <p>Sem comentarios</p>
                    </div>
                    <div class="btn_send">
                        <button class="btn btn__2">Entrar</button>
                    </div>
                </div>

                <div id="c__3">
                    <div class="card_spec btn__3">
                        <h1 class="card_title">Empresas</h1>
                    </div>
                    <div class="card_info">
                        <p>R$0/ mês</p>
                        <p>2 Downloads dia</p>
                        <p>2Mb Limit</p>
                        <p>Sem comentarios</p>
                    </div>
                    <div class="btn_send">
                        <button class="btn btn__3">Entrar</button>
                    </div>
                </div>
            </div>
        </DIV>
    )
}
const DIV = styled.div`

    
    height: 100vh;
    background-color: #232324;
    max-width: 100%;
    

    .precos__h1 {
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 70px;
    text-transform: capitalize;
    font-family:  "Carter One", cursive;
    top: 40px;
    }
    .precos__p {
    position: relative;
    text-align: center;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    top: 35px;
    }

    #cards {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    position: relative;
    top: 15%;
    margin-left: 27%;
    gap: 10px;
    border-radius: 10px;
    }

    #c__1,
    #c__2,
    #c__3 {
    background-color: white;
    height: 250%;
    display: grid;
    text-align: center;
    font-family: "Roboto", sans-serif;
    border-radius: 10px;
    }

    .card_info > p {
    font-size: 18px;
    position: relative;
    top: 12%;
    }

    .card_spec {
    background-color: #b8b8be;
    height: 60%;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    }

    .btn {
    background-color: #b8b8be;
    height: 70%;
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;
    position: relative;
    top: 30%;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    }

    .card_title {
    position: relative;
    top: 16%;
    }

    .btn__2,
    .btn__3 {
    background-color: rgb(18, 95, 211);
    color: #fff;
    font-weight: 700;
    border-color: rgb(18, 95, 211);
    }

    .btn__1:hover {
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    color: #000000;
    transition: all 0.9s;
    border-color: rgb(255, 255, 255);
    font-weight: 700;
    }

    .btn:hover,
    .btn:hover {
    cursor: pointer;
    background-color: rgb(255, 255, 255);
    color: #000000;
    transition: all 0.9s;
    border-color: rgb(255, 255, 255);
    }

`
export default Prices;