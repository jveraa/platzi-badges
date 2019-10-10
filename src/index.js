// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//     'a',
//     {href: 'https://platzi.com'},
//     'Ir a Platzi');
// const name = 'Jorge & Kathy';
// const sum = () => 3 + 3;
// const element = React.createElement(
//     'h1',{},`Hola, soy ${name}`
//     );
// const jsx = <h1> Hola soy, {__expresiones__}</h1>; ==> expresiones si son null undefined no se visualizaran

const jsx = (<div>
        <h1>Hola soy Jorge Vera</h1>
        <p>Soy ingeniero FrontEnd</p>  
    </div>);

const element = React.createElement(
    'div',
    {},
    React.createElement('h1',{},'Soy Jorge'),
    React.createElement('p',{},'Soy ingeniero de la web.'))    
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
