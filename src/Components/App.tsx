import React, { Component } from 'react';
import ReactComponent from './ReactComponent';
import helloReact from './CreateElementComponent';
import ReactPureComponent from './ReactPureComponent';
import FunctionalComponent from './FunctionalComponent';
import Counter from './Counter';
import Search from './SearchComponent';
import Header from './Header';
import MainContent from './MainContent';

class App extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <Header />

                    <MainContent />
                </div>
            </>
        );
    }
}

export default App;
