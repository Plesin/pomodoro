import React, {PropTypes} from 'react';
import TaskSelect from './TaskSelect';
import Task from './Task';

class Pomodoro extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: props.tasks,
			selectedTask: props.tasks[0]
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
				<TaskSelect tasks={this.state.tasks} onTaskSelected={this.setTask.bind(this)}/>
				<Task task={this.state.selectedTask}/>
			</div>
		);
	}
}

Pomodoro.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Pomodoro;