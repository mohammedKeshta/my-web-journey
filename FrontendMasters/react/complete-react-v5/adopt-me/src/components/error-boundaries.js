import React, { Component } from 'react';
import { Link, navigate } from '@reach/router';

class ErrorBoundary extends Component {
  state = { hasError: false };
  // This lifecycle is invoked after an error has been thrown by a descendant component.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  componentDidUpdate() {
    const { hasError } = this.state;
    if (hasError) {
      setTimeout(() => navigate('/'), 5000);
    }
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{' '}
          to back to the home page or wait five seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
