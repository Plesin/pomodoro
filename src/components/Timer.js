import React, {PropTypes} from 'react';
import classNames from 'classnames';

class Timer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			startTime: this.minutesToSeconds(props.time),
			time: this.minutesToSeconds(props.time),
			isRunning: false,
			interval: null
		};
	}

	componentWillReceiveProps(nextProps) {
		const newTime = this.minutesToSeconds(nextProps.time);

		if (this.state.isRunning) {
			// TODO temporary, suspends timer
			if (confirm("Do you want to cancel current timer?")) {
				this.setState({ time: newTime, startTime: newTime, isRunning: false });
				clearInterval(this.interval);
			}
		} else {
			this.setState({ time: newTime, startTime: newTime });
		}
	}

	minutesToSeconds(minutes) {
		return minutes * 60;
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

	resetTimer() {
		this.setState({time: this.state.startTime, isRunning: false});
		clearInterval(this.interval);
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
				<a className={'reset'} href="javascript:;" onClick={this.resetTimer.bind(this)}>Reset Timer</a>
			</div>
		);
	}
}

Timer.propTypes = {
    time: React.PropTypes.number.isRequired
};

export default Timer;
