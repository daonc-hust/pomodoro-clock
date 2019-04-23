import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { 
    incrementBreak, incrementSession, 
    decrementBreak, decrementSession } from './../actions/app'

class Option extends Component {

    incrementBreakLength = () => {
        this.props.dispatch(incrementBreak())
    }

    decrementBreakLength = () => {
        if(this.props.breakLength > 0) {
            this.props.dispatch(decrementBreak())
        }
    }

    incrementSessionLength = () => {
        this.props.dispatch(incrementSession())
    }

    decrementSessionLength = () => {
        if(this.props.sessionLength > 0) {
            this.props.dispatch(decrementSession())
        }
    }

    render() {
        return (
            <div className="settings">
                <div className="settings-section">
                    <label>Break Length</label>
                    <div>
                        <button onClick={this.decrementBreakLength}  id="break-decrement">-</button>
                        <span id="break-length">{this.props.breakLength}</span>
                        <button onClick={this.incrementBreakLength} id="break-increment">+</button>
                    </div>
                </div>
                <div className="settings-section">
                    <label>Session Length</label>
                    <div>
                        <button onClick={this.decrementSessionLength} id="session-decrement">-</button>
                        <span id="session-length">{this.props.sessionLength}</span>
                        <button onClick={this.incrementSessionLength} id="session-increment">+</button>
                    </div>
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

export default connect(mapStateToPropsTop) (Option)