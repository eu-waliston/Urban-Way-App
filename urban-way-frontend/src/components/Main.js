import React from "react";
import styled from "styled-components";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Main = () => {
    return (
        <SECTION id="descubra">
            <h1 
                class="descubra--h1"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                #Descubra e apaixone-se!
            </h1>
            <div 
                id="grid-images"
                data-aos="fade-up"
                data-aos-duration="3000"
            >
                <img src={require("./img/top-img-1.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-2.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-3.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-4.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-5.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-6.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-7.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-8.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-9.jpg")} alt="modelos" class="img-grid" />
                <img src={require("./img/top-img-10.jpg")} alt="modelos" class="img-grid" />
            </div>

            <div id="hall--da--fama">
                <div 
                    id="side"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <h1 class="hall--h1">hall da fama</h1>
                    <p class="hall--p-1">as imagens mais vistas do nosso site</p>
                    <p class="hall--p-2">vote na sua favorita!</p>
                    <button class="hall--btn">Vote</button>
                </div>

                <div 
                    class="grid--hall"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <img src={require("./img/hall-1.jpg")} alt="hall da fama" class="img--hall R1" />
                    <img src={require("./img/hall-2.jpg")} alt="hall da fama" class="img--hall R2" />
                    <img src={require("./img/hall-3.jpg")} alt="hall da fama" class="img--hall R3" />
                    <img src={require("./img/hall-4.jpg")} alt="hall da fama" class="img--hall R4" />
                </div>


            </div>
        </SECTION>
    )
}
const SECTION = styled.section`
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    @import url("https://fonts.googleapis.com/css2?family=Carter+One&display=swap");


    height: 200vh;
    background-color: var(--side-color);
    max-width: 100%;
    

    .descubra--h1 {
    text-align: center;
    color: #fff;
    font-size: 40px;
    position: relative;
    top: 30px;
    margin-bottom: 50px;
    font-family: "Carter One", cursive;
    text-transform: capitalize;
    }
    #grid-images {
    display: grid;
    grid-template-columns: repeat(5, 270px);
    gap: 7px;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    }

    .img-grid {
    width: 270px;
    }

    .img-grid:hover {
    cursor: pointer;
    transition: all 0.5s;
    transform: rotate(5deg) scale(1.2);
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.521);
    }

    /* Hall da fama */

    #hall--da--fama {
    position: relative;
    top: 5%;
    }

    #side {
    color: #fff;
    position: relative;
    top: 300px;
    margin-left: 180px;
    }

    .hall--h1 {
    font-size: 70px;
    text-transform: capitalize;
    font-family: "Carter One", cursive;
    }

    .hall--p-1,
    .hall--p-2 {
    font-family: "Carter One", cursive;
    text-transform: capitalize;
    font-size: 20px;
    }
    .hall--btn {
    height: 50px;
    width: 150px;
    position: relative;
    top: 70px;
    font-size: 20px;
    text-transform: uppercase;
    }

    .hall--btn:hover {
    font-weight: bold;
    }

    .grid--hall {
    float: right;
    position: relative;
    right: 200px;
    top: 80px;
    }
    .img--hall {
    width: 260px;
    z-index: 2;
    }

    .R1:hover,
    .R2:hover,
    .R3:hover,
    .R4:hover {
    overflow: hidden;
    margin: 0;
    padding: 0;
    transform: rotate(5deg) scale(1.4);
    transition: all 0.9s;
    border-radius: 8px;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.377);
    z-index: 122222;
    margin-left: 40px;
    }
   

`
export default Main; 