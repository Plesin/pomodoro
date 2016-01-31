import React, {PropTypes} from 'react';
import { Link } from 'react-router';

import TaskSelect from './TaskSelect';
import {tasks} from '../json/tasks';
import Task from './Task';

class Pomodoro extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: tasks,
			selectedTask: tasks[0]
		};
	}

	setTask(e) {
		const optionId = parseInt(e.target.value, 10);
		const selectedTask = this.state.tasks.filter(task => {
			return task.id === optionId;
		});
		this.setState({ selectedTask: selectedTask[0] });
	}

	render() {
		return (
			<div>
				<Link to={'about'} className={'floatLeft'}>About</Link>
				<TaskSelect tasks={this.state.tasks} onTaskSelected={this.setTask.bind(this)}/>
				<Link to={`/taskDetail/${this.state.selectedTask.id}`}>Edit</Link>
				<Task task={this.state.selectedTask}/>
			</div>
		);
	}
}

Pomodoro.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Pomodoro;