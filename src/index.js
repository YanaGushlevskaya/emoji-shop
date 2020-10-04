import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faStar, faTimes);

ReactDOM.render(<App/>, document.getElementById('container'));

