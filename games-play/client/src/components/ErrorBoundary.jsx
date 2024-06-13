import { Component } from "react";

// This boundary is for White Screen of Death; it's needed to have one of the two methods: 'GetDerivedStateFromError' or 'componentDidCatch'
// Error boundary worcs for production devironment
export default class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');

        return {
            hasError: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch');
        // TODO: logging
    }

    render() {
        if (this.state.hasError) {
            return <h1>404</h1>
        }

        return this.props.children;
    }
}