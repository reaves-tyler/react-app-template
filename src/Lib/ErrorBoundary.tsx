import React from 'react';

interface props {
    msg?: string;
    component?: any;
}
interface state {
    hasError: boolean;
}
export class ErrorBoundary extends React.Component<props, state> {
    constructor(props: props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.log(error);
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI\
            if (this.props.msg) {
                return <h1>{this.props.msg}</h1>;
            }

            if (this.props.component) {
                return this.props.component;
            }

            if (!this.props.msg) {
                return <h1>Something went wrong.</h1>;
            }
        }

        return this.props.children;
    }
}
