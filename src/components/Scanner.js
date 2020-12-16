import React, { useEffect } from 'react';
import config from './config.json';
import Quagga from 'quagga';

const Scanner = props => {
    const { onDetected } = props;

    useEffect(() => {
        Quagga.init(config, err => {
            if (err) {
                console.log(err, "Erro ao scannear!");
            }
            Quagga.start();
            return () => {
                Quagga.stop();
            }     
        });

        Quagga.onProcessed(() => {
            const drawingCanvas = Quagga.canvas.dom.overlay;
            drawingCanvas.style.display = 'none';
        });
      
          Quagga.onDetected(detected);
        }, []);
      
        const detected = result => {
          onDetected(result.codeResult.code);

          console.log(result.codeResult);
        };


        return (
            <div id="interactive" className="viewport" />
        );
    };

export default Scanner;