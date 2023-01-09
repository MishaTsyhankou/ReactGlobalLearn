import React, { Component, ErrorInfo, ReactNode } from 'react';

import styles from './ErrorBoundary.module.scss';

interface Props {
    children: ReactNode;
}

interface State {
    error: boolean;
    errorDescribe: string;
}

class ErrorBoundary extends Component<State> {
    state: State = {
        error: false,
        errorDescribe: '',
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    render() {
        if (this.props.error) {
            return (
                <>
                    <h1 className={styles.wrapper}>{this.props.errorDescribe}</h1>
                </>
            );
        }
    }
}

export default ErrorBoundary;
