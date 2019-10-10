import React from 'react';

import './styles/Badge.css'; // aqui no se esta guardando en una variable o referencia ... react sabe como insertarlo en nuestra aplicacion
import confLogo from '../images/badge-header.svg';

//Como atributo de contenedores debe ser className porque puede generar conflicto con class del componente

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            alt="Avatar"
          />
          <h1>
            Jorge <br /> Vera
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Frontend Engineer</h3>
          <div>@jveraa</div>
        </div>

        <div className="Badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
