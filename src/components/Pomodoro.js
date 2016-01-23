import React, {PropTypes} from 'react';
import TaskSelect from './TaskSelect';
import Task from './Task';

const Pomodoro = (props) => {

	const initialTask = props.tasks[0];

	return (
	<div>
		<TaskSelect tasks={props.tasks} />
		<Task task={initialTask}/>
	</div>
	);

};

Pomodoro.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object)
};

export default Pomodoro;