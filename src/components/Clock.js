import React, { Component } from 'react'
import { connect }          from 'react-redux'

class Clock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="times">
                <div className="times-content">
                    <label id="timer-label">Session</label>
                    <span id="time-left">{this.props.sessionLength}</span>
                </div>
                <div className="controller">
                    <button id="start_stop">Start</button>
                    <button id="reset">Reset</button>
                </div>
            </div>
        )
    }
}

function mapStateToPropsTop(state) {
	return {
        sessionLength : state.app.sessionLength,
        breakLength : state.app.breakLength
	}
}

export default connect(mapStateToPropsTop) (Clock)