import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import Pomodoro from './components/Pomodoro';
import './styles/styles.scss';

render( <Pomodoro />, document.getElementById('app'));