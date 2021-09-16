import React, { useState } from 'react';

function App() {
  const [values, setValues] = useState<any>("");
  const [decimal, setDecimal] = useState<any>();
  const onChangeValues = (e: any) => {
    setValues(e.target.value);
  }
  const onSubmit = (e: any) => {
    try {
      e.preventDefault();
      var is_binary = true;

      var numbers = [];

      for (const element of values) {
        if (Number(element) === 0 || Number(element) === 1) {
          is_binary = true;
          numbers.push(Number(element));
        } else {
          is_binary = false;
        }
      }
      var numbers_size = numbers.length;
      if (!is_binary) {
        alert("ESTE NÃO É UM NÚMERO BINÁRIO");
        setValues("");
      } else if (numbers_size > 0) {
        var decimal = 0;

        numbers.forEach((number, i) => {
          let potency = numbers_size - 1 - i;
          decimal += number * 2 ** potency;
        });

        setDecimal(decimal);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" value={values} onChange={onChangeValues} />
        <button type="submit">Converter</button>
      </form>
      {decimal && <span>Resultado: {decimal}</span>}
    </div>
  );
}

export default App;
