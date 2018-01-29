import React from 'react';
import ReactDOM from 'react-dom';
// import style from 'css/main.css';
//import Sections from 'components/Sections/index.js';
import bootstrap from 'bootstrap-loader';
import Landing from 'components/Sections/Landing/index.js'
import style from 'sass/main.scss';


ReactDOM.render(
    <div>
        
        <Landing>
            <h2>Hekdadaad</h2> 
            <button>Press Me</button>
        </Landing>
    </div>, 
  
    document.getElementById('app')
)

console.log('check for me');