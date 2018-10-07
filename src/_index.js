import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaCards from './Components/MediaCards';
import logo from './logo.svg';
import Gate from './Components/Gate';

function Hi({name, num1, num2, doStuff, secondName}){
    return( 
        <div className="first-div">
            <h1>Hello <strong>{name}</strong>!</h1>
            <hr/>
            <ul className="menu">
                <li><a href="/" onClick={doStuff}>Nuno</a></li>
                <li><a href={'/' + secondName}>{secondName}</a></li>
                <li><a href="/Da">Da</a></li>
                <li><a href="/Silva">Silva</a></li>
                <li><a href="/Marques">Marques</a></li>
            </ul>
            <hr/>
            <h2>End!</h2>
            <hr/>
            <h3>{num1} +  {num2}= {num1 + num2}</h3>
            <MediaCards title="Titulo" body="Body" imageUrl={logo}/>
            <Gate isOpen={false}/>
        </div>
    );
}

ReactDOM.render( <Hi name="Nuno Silva Marques" num1={1} num2={1} secondName="Miguel"/>, document.querySelector('#root') );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();