import React, { Component } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
    render() {
        return (
            <>
                <div className="main">
                    <Header />
                    <ErrorBoundary>
                        <MainContent />
                    </ErrorBoundary>
                    <Footer />
                </div>
            </>
        );
    }
}

export default App;
