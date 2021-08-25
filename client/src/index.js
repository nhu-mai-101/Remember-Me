import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import planets from './planets.js'

ReactDOM.render(<App planets={planets}/>, document.getElementById('app'));