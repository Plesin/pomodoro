import React, {PropTypes} from 'react';
import Timer from './Timer';

const Task = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<Timer time={10}/>
		</div>
	);
};

Task.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default Task;
