import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseTimer, setTimeLeftInSecond, setBreakLengthDefault } from './../actions/app'
import config from './../constants/config'

class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isStart: false,
            timerInterval: null,
        }
    }

    phaseControl = () => {
        if(this.props.timeLeftInSecond === 0) {
            this.props.audioBeep.current.play();
        } else if (this.props.timeLeftInSecond === -1) {
            this.props.dispatch(setTimeLeftInSecond(this.props.breakLength * 60))
        }
    }

    onDecreaseTimer = () => {
        this.props.dispatch(decreaseTimer())
    }

    formatTime = (timeLeftInSecond) => {
        let minute = Math.floor(timeLeftInSecond / 60);
        if (minute < 10) minute = '0' + minute;

        let second = timeLeftInSecond - 60 * minute;
        if (second < 10) second = '0' + second;

        return `${minute}:${second}`;
    }

    onStartStop = () => {
        this.setState({ isStart: !this.state.isStart })

        if(!this.state.isStart) {
            document.getElementById('break-decrement').disabled = true;
            document.getElementById('break-increment').disabled = true;
            document.getElementById('session-decrement').disabled = true;
            document.getElementById('session-increment').disabled = true;

            this.setState({
                timerInterval: setInterval(() => {
                    this.onDecreaseTimer()
                    this.phaseControl()
                }, 1000)
            })
        } else {
            document.getElementById('break-decrement').disabled = false;
            document.getElementById('break-increment').disabled = false;
            document.getElementById('session-decrement').disabled = false;
            document.getElementById('session-increment').disabled = false;

            this.state.timerInterval && clearInterval(this.state.timerInterval);
        }
    }

    onReset = () => {
        this.setState({ isStart: false, timerInterval: null})
        this.state.timerInterval && clearInterval(this.state.timerInterval);
        this.props.dispatch(setTimeLeftInSecond(config.initialTimeLeftInSecond))
        this.props.dispatch(setBreakLengthDefault(config.initialBreakLength))
    }

    render() {
        console.log(this.props.breakLength)
        return (
            <div className="times">
                <div className="times-content">
                    <label id="timer-label">Session</label>
                    <span id="time-left">{this.formatTime(this.props.timeLeftInSecond)}</span>
                </div>
                <div className="controller">
                    <button onClick={this.onStartStop} id="start_stop">{this.state.isStart ? "Stop" : "Start"}</button>
                    <button onClick={this.onReset} id="reset">Reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToPropsTop(state) {
    return {
        sessionLength   : state.app.sessionLength,
        breakLength     : state.app.breakLength,
        timeLeftInSecond: state.app.timeLeftInSecond
    }
}

export default connect(mapStateToPropsTop)(Clock)