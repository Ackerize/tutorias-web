import React, { useState } from "react";

const Saludo = ({ funcion }) => {

    const [value, setValue] = useState("");

    const onClick = () => {
        funcion((prevState) => [...prevState, value]);
        /*
            prevState: [] -> [value]
            prevState: [value] -> [value, value2]
            prevState: [value, value2] -> [value, value2, value3]
            prevState: [value, value2, value3] -> [value, value2, value3, value4]
        */
        setValue("");
    }

    const onChange = (event) => {
        setValue(event.target.value);
    }


  return (
    <div>
      <input type="text" placeholder="Ingrese un saludo" value={value} onChange={onChange} />
      <button onClick={onClick}>Agregar</button>
    </div>
  );
};

export default Saludo;
