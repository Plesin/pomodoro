import React, {PropTypes} from 'react';
import classNames from 'classnames';

class Timer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			startTime: props.time,
			time: props.time,
			isRunning: true,
			interval: null
		};
	}

	componentDidMount() {
		this.start();
	}

	start() {
		this.interval = setInterval(()=> {
			let newState = this.state.time - 1;
			if (this.state.time > 0) {
				this.setState({time: newState});
				document.title = `time: ${newState}`;
			} else {
				clearInterval(this.interval);
				this.setState({time: this.state.startTime, isRunning: false});
			}
		}, 1000);
	}

	setStatus() {
		if (this.state.isRunning) {
			clearInterval(this.interval);
			this.setState({isRunning: false});
		} else {
			this.setState({isRunning: true});
			this.start();
		}
	}

	render() {
		const classes = classNames({ time: true, isRunning: this.state.isRunning });
		const iconClasses = classNames({ icon: true, play: !this.state.isRunning, pause: this.state.isRunning });

		return (
			<div>
				<h1 className={classes}>{this.state.time}</h1>
				<div className={iconClasses} onClick={this.setStatus.bind(this)}></div>
			</div>
		);
	}
}

Timer.propTypes = {
    time: React.PropTypes.number.isRequired
};

export default Timer;
