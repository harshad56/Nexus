import React from 'react';
import { Home, RefreshCw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="notfound">
          <div className="notfound__content">
            <div className="notfound__code">
              <span className="notfound__0">!</span>
            </div>
            <h1 className="notfound__title">Something Went Wrong</h1>
            <p className="notfound__desc">
              An unexpected error occurred. Please try refreshing the page or navigating back to the homepage.
            </p>
            <div className="notfound__actions">
              <a href="/" className="notfound__btn notfound__btn--primary">
                <Home size={18} /> Back to Home
              </a>
              <button
                onClick={() => window.location.reload()}
                className="notfound__btn notfound__btn--secondary"
              >
                <RefreshCw size={18} /> Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
