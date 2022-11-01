import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    error: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    state: State = {
        error: false,
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return <h1>Something went wrong</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
