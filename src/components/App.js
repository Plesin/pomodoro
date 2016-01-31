import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import Pomodoro from './Pomodoro';
import About from './About';
import TaskDetail from './TaskDetail';

export default () => {
  return (
    <Router history={browserHistory}>
		<Route path="/" component={ Pomodoro } />
		<Route path="about" component={ About } />
		<Route path="taskDetail/:taskId" component={ TaskDetail } />
    </Router>
  );
}