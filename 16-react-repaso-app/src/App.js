import React, { useState, useEffect } from "react";
import Person from "./Person";
import Saludo from "./Saludo";
import Titulo from "./Titulo";

function App() {
  const [saludo, setSaludo] = useState(null);

  // let saludo = [];
  // const setSaludo = (newElement) => {
  //   saludo.push(newElement);
  //   console.log(saludo);
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setSaludo(data));
  }, []);

  /*
  if(condicion){

  }
  */
  return (
    <>
      <div>
        <Titulo>
          <Saludo funcion={setSaludo} />
        </Titulo>
        {
          saludo && (
            saludo.map((elemento) => {
              return <Person key={elemento.id} elemento={elemento} />;
            })
          )
        }
      </div>
    </>
  );
}

export default App;
