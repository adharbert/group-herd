import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './src/store';

import Navbar from './src/components/layout/Navbar';
import Landing from './src/components/layout/Landing';
import Footer from './src/components/layout/Footer';

import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Navbar />
                        <Route exact path="/" component={ Landing } />
                        <div className="container">
                        
                        </div>        
                        <Footer />                
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;
