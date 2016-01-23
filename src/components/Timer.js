import React, {PropTypes} from 'react';
import classNames from 'classnames';

class Timer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			startTime: props.time * 60,
			time: props.time * 60,
			isRunning: false,
			interval: null
		};
	}

	start() {
		this.interval = setInterval(()=> {
			let newState = this.state.time - 1;
			if (this.state.time > 0) {
				this.setState({time: newState});
				document.title = this.formatTime(newState);
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

	formatTime(seconds) {
		let min = Math.floor(seconds / 60);
		let sec = seconds%60;
		let minStr = min < 10 ? '0' + min : min + '';
		let secStr = sec < 10 ? '0' + sec : sec + '';

		return `${minStr}:${secStr}`;
	}

	render() {
		const classes = classNames({ time: true, isRunning: this.state.isRunning });
		const iconClasses = classNames({ icon: true, play: !this.state.isRunning, pause: this.state.isRunning });
		const timeFormated = this.formatTime(this.state.time);

		return (
			<div>
				<h1 className={classes}>{timeFormated}</h1>
				<div className={iconClasses} onClick={this.setStatus.bind(this)}></div>
			</div>
		);
	}
}

Timer.propTypes = {
    time: React.PropTypes.number.isRequired
};

export default Timer;
