import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Pomodoro from './Pomodoro';
import About from './About';
import TasksList from './TasksList';

export default () => {
  return (
    <Router>
		<Route path="/" component={ Pomodoro } />
		<Route path="about" component={ About } />
		<Route path="editTasks" component={ TasksList } />
    </Router>
  );
}