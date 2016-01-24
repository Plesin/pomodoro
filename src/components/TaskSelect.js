import React, {PropTypes} from 'react';

const TaskSelect = (props) => {
	const options = props.tasks.map(task => {
		return <option value={task.id} key={task.id}>{task.title}</option>;
	});

	return (
		<select onChange={props.onTaskSelected}>{options}</select>
	);
};

TaskSelect.propTypes = {
	tasks: PropTypes.arrayOf(PropTypes.object),
	onTaskSelected: PropTypes.func
};

export default TaskSelect;
