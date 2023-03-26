import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import ErrorState from '../assets/images/404_error.svg';

class ErrorBoundary extends Component {
  // navigate = useNavigate();
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            background: '#fafafa',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div style={{ textAlign: 'center' }}>
            <img src={ErrorState} alt='page_not_found' />
            <p style={{ padding: '12px 0' }} className='heading4'>
              Error 404 - Something went wrong.
            </p>
            <Link to='/' onClick={() => this.setState({ hasError: false })} className='primaryBtn'>
              Return to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
