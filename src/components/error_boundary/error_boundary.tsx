import { Component, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorInfo: string;
}
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: '',
    };
  }

  componentDidCatch(error: Error) {
    this.setState({ hasError: true, errorInfo: error.message });
  }

  render() {
    if (this.state.hasError) {
      return <div>Что то случилось...</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
