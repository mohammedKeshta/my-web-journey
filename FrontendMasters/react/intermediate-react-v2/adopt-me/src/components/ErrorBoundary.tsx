import React, { Component, ErrorInfo } from 'react';
import { Link, navigate, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  public state = { hasError: false, redirect: false };

  // This life-cycle is invoked after an error has been thrown by a descendant component.
  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  public componentDidUpdate() {
    const { hasError } = this.state;
    if (hasError) {
      setTimeout(() => navigate('/'), 5000);
    }
  }

  public render() {
    const { hasError, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    if (hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>
          to back to the home page or wait five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
