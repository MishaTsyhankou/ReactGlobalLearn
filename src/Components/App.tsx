import React, { Component } from 'react';
import ReactComponent from './ReactComponent';
import helloReact from './CreateElementComponent';
import ReactPureComponent from './ReactPureComponent';
import FunctionalComponent from './FunctionalComponent';
import Counter from './Counter';
import Search from './SearchComponent';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <Header />
                    {helloReact}
                    <ReactComponent />
                    <ReactPureComponent />
                    <FunctionalComponent />
                    <Counter />
                    <Search />
                </div>
            </>
        );
    }
}

export default App;
