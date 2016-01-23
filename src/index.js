import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {tasks} from './json/tasks';
import Pomodoro from './components/Pomodoro';
import './styles/styles.scss';

render( <Pomodoro tasks={tasks}/>, document.getElementById('app'));