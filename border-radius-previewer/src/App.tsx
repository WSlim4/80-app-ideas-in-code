import React, { useState } from 'react';
import './styles.css';

function App() {

  var left = 0;
  var top = 0;
  var right = 0;
  var bottom = 0;

  const onChange = (e: any) => {
    try {
      const { name, value } = e.target;
      const box: any = document.getElementById('box');
      switch (name) {
        case 'left':
          if (value) {
            left = value;
          } else {
            left = 0;
          }
          break;
        case 'top':
          if (value) {
            top = value;
          } else {
            top = 0;
          }
          break;
        case 'right':
          if (value) {
            right = value;
          } else {
            right = 0;
          }
          break
        default:
          if (value) {
            bottom = value;
          } else {
            bottom = 0;
          }
          break;
      }
      if (box?.style) {
        box.style.borderRadius = `${left}px ${top}px ${right}px ${bottom}px`;
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  const onCopy = () => {
    const box: any = document.getElementById('box');
    const resulting_css = box?.style.borderRadius;
    navigator.clipboard.writeText(resulting_css);
    alert("CSS COPIADO");
  }

  const onClear = () => {
    const box: any = document.getElementById('box');

    const left_input: any = document.getElementsByClassName('left-input')[0];
    const top_input: any = document.getElementsByClassName('top-input')[0];
    const right_input: any = document.getElementsByClassName('right-input')[0];
    const bottom_input: any = document.getElementsByClassName('bottom-input')[0];

    left_input.value = "";
    top_input.value = "";
    right_input.value = "";
    bottom_input.value = "";

    left = 0;
    top = 0;
    left = 0;
    bottom = 0;

    if (box && box?.style) {
      box.style.borderRadius = `0px`;
    }
  }

  return (
    <>
      <div className="app">
        <div id="box">
        </div>
      </div>
      <div className="inputs">
        <div>
          <input onChange={onChange} className="left-input" type="text" name="left" placeholder="Left Radius" />
          <input onChange={onChange} className="top-input" type="text" name="top" placeholder="Top Radius" />
          <input onChange={onChange} className="right-input" type="text" name="right" placeholder="Right Radius" />
          <input onChange={onChange} className="bottom-input" type="text" name="bottom" placeholder="Bottom Radius" />
        </div>
      </div>
      <div className="buttons">
        <div>
          <button placeholder="Copiar" onClick={() => onCopy()}>Copiar</button>
          <button placeholder="Limpar" onClick={() => onClear()}>Limpar</button>
        </div>

      </div>
    </>
  );
}

export default App;
