import React, { Component } from 'react'
import { Header, Footer, Clock, Option } from './components'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                    <Option />
                    <Clock />
                <Footer />
            </div>
        );
    }
}

export default App;
