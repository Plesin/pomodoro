import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/styles.scss';

render( <App />, document.getElementById('app'));