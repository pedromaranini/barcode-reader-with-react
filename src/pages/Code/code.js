import React from 'react';
import { Link } from 'react-router-dom';
import { BiCamera, BiArrowBack } from 'react-icons/bi';

import logoImg from '../../assets/logo.svg';

import './code.css';

function Code() {
    function handleClick() {
        const input = document.getElementById("code");

        input.style.display = 'block';
    }

    return (
        <div className="page-container">
            <div className="page-code">
                <img 
                    src={logoImg}
                    className="logo-image"
                    alt="Explica Bula"
                />

                <h2>Escaneie o código utilizando a câmera abaixo</h2>
                
                <Link to="/readcode" className="button-cam">
                    <BiCamera size={100} color="#000" />
                </Link>
            </div>

            <button type="button" onClick={handleClick}>
                Digitar código
            </button>

            <input id="code" type="text" name="name" placeholder="DIGITE O CÓDIGO DE BARRAS" />

            <a href="/" className="last-button">
                OK
            </a>

            <h2>
                Trata-se de um MVP e por isso os acessos só conseguirão entender
                o projeto após o contato com o time Explica Bula. Caso queira entre 
                contato clicando aqui.
            </h2>

            <Link to="/" className="back-icon">
                <BiArrowBack size={30} color="#000" />
            </Link>
        </div>
    );
}

export default Code;