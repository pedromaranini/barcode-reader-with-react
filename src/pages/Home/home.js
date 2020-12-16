import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import './home.css';

function Home() {
    return (
        <div className="container">
            <div className="page-home">

                <img 
                    src={logoImg}
                    className="logo-image"
                    alt="Explica Bula"
                />

                <h2>
                    Teste uma das funcionalidades idealizadas por nós. Preencha
                    seus dados e utilize um dos códigos de barra de produtos que você
                    já deve ter recebido previamente.
                </h2>
            </div>

            <form className="input">
                <input id="name" type="text" name="name" placeholder="NOME" />
            </form>

            <form className="input">
                <input id="email" type="email" name="email" placeholder="E-MAIL" />
            </form>

            <Link to="/code" className="button" onClick={buttonClick} >
                ENVIAR
            </Link> 

            <h2>
                Trata-se de um MVP e por isso os acessos só conseguirão entender
                o projeto após o contato com o time Explica Bula. Caso queira entre 
                contato clicando aqui.
            </h2>
        </div>
    );

    function buttonClick() {
        const inputName = document.getElementById('name');
        const inputEmail = document.getElementById('email');

        // salvar dados no navegador
        sessionStorage.setItem('name' , inputName.value);
        sessionStorage.setItem('email', inputEmail.value);
    }
}   

export default Home;