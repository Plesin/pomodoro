import React, {PropTypes} from 'react';
import Timer from './Timer';

const Task = (props) => {
	return (
		<div>
			<Timer time={props.task.time}/>
		</div>
	);
};

Task.propTypes = {
	task: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		time: PropTypes.number.isRequired,
		break: PropTypes.number
	}).isRequired
};

export default Task;
