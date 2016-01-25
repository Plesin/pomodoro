import React, {PropTypes} from 'react';
import {tasks} from '../json/tasks';

const TaskList = () => {
	const taskItems = tasks.map(task => {
		return (
			<li key={task.id}>
				{task.title} | {task.time} minutes
				<a href="javascript:;"> edit</a> |
				<a href="javascript:;"> delete</a>
			</li>
		)
	})
	return (
		<div>
			<h1>Tasks List</h1>
			<ul>{taskItems}</ul>
			<p><a href="/">Back</a></p>
		</div>
	);
};

export default TaskList;
