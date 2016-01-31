import React, {PropTypes} from 'react';
import {tasks} from '../json/tasks';

const TaskDetail = (props) => {
	const defaultTask = {
		break: null,
		id: null, // TODO get next id
		time: 60,
		title: ""
	};
	const taskId = parseInt(props.params.taskId, 10);
	const editedTask = tasks.filter(task => {
		return task.id === taskId;
	});

	const headerText = editedTask.length ? 'Edit task' : 'New Task'
	const task = editedTask.length ? editedTask[0] : defaultTask;

	let onTaskChange = (e) => {
		const input = e.target;
		task[input.name] = input.value;
		console.dir(task);
	};

	return (
		<div>
			<h1>{headerText}</h1>
			<form>
				<p>
					<label htmlFor="title">task name</label>
					<input type="text" name="title" defaultValue={task.title} onChange={onTaskChange}/>
				</p>
				<p>
					<label htmlFor="time">task time (max 120 minutes)</label>
					<input type="number" min="0" max="120" name="time" defaultValue={task.time} onChange={onTaskChange}/>
				</p>
				<p>
					<label htmlFor="break">task break</label>
					<input type="number" name="break" min="0" defaultValue={task.break} onChange={onTaskChange}/>
				</p>
			</form>
			<p><a href="/">Back</a></p>
		</div>
	);
};

TaskDetail.propTypes = {
	params: PropTypes.shape({
		taskId: PropTypes.string
	})
};

export default TaskDetail;
