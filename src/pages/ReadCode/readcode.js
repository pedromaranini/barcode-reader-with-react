import React, { useState } from 'react';
import Scanner from '../../components/Scanner';
import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';

import logoImg from '../../assets/logo.svg';

import './readcode.css';

function ReadCode() {
    const [camera, setCamera] = useState(false);
    const [result, setResult] = useState(null);
  
    const onDetected = result => {
      setResult(result);
    }

    return (
        <>
        <div className="container">
            <img 
                src={logoImg}
                className="logo-image"
                alt="Explica Bula"
            />
        </div>

        <div className="App">
        <p>{result ? result : "Clique no botão para Scannear!"}</p>
        <button onClick={() => setCamera(!camera)}>
          {camera ? "Parar" : "Iniciar"}
        </button>
        
          {camera && <Scanner onDetected={onDetected} />}

          <Link to="/code" className="back-icon">
            <BiArrowBack size={30} color="#000" />
          </Link>
        
      </div>
      </>
      );
    } 

export default ReadCode;