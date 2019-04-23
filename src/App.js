import React, { Component } from 'react'
import { Header, Footer, Clock, Option } from './components'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.audioBeep = React.createRef();
    }

    render() {
        return (
            <div className="App">
                <Header />
                    <Option timeLeftInSecond={this.props.sessionLength}/>
                    <Clock audioBeep={this.audioBeep}/>
                    <audio id="beep" preload="auto" src="https://goo.gl/65cBl1" ref={this.audioBeep}></audio>
                <Footer />
            </div>
        );
    }
}

export default App
