import React from 'react';

import confLogo from '../images/badge-header.svg';

//El componente es una clase
//En el img al hacer referencia a la imagen, tb traera el hash de la imagen que lo guardara en cache
//para que no se este cargando a cada rato.

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={confLogo} alt="Logo de la conferencia" /> 
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            Jorge <br /> Vera
          </h1>
        </div>

        <div>
          <p>Frontend Engineer</p>
          <p>@jveraa</p>
        </div>

        <div>#platziconf</div>
      </div>
    );
  }
}

export default Badge; //exportamos porque estamos en otro archivo
