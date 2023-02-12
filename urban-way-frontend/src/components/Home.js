import React from 'react';
import styled from 'styled-components';
import fundo from './img/fundo.jpg';

/*Utils*/
import 'animate.css';

const Home = () => {
    return (
        <INITIAL_SECTION style={{ backgroundImage:`url(${fundo})` }} id="home">
            <div class="midle-div-home">
                <h1 class="home--h1 animate__animated animate__backInDown">
                    <span class="square-1">U</span>rban Way.
                </h1>
                <h2 class="home--h2 animate__animated animate__backInLeft">
                    <span class="square-2">seu estilo, sua identidade!</span>
                </h2>
            </div>
        </INITIAL_SECTION>
    )
}
const INITIAL_SECTION = styled.section`

    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    @import url("https://fonts.googleapis.com/css2?family=Carter+One&display=swap");
    

  top: 0;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 100%;


    .midle-div-home {
        position: relative;
        margin-left: 14%;
        top: 30%;

        .home--h1,
        .home--h2 {
            font-family: "Carter One", cursive;
            color: #fff;
        }

        .home--h1 {
            font-size: 160px;
            text-transform: capitalize;
        }

        .home--h2 {
            position: relative;
            font-size: 50px;
            margin-top: -40px;
            margin-left: 50px;
            text-transform: capitalize;
        }

        .square-2 {
            background-color: #232324;
            padding: 5px;
            border-radius: 5px;
        }
    }

`
export default Home;