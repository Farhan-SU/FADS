import React from 'react';
import ReactDOM from 'react-dom';

class Error extends React.Component {

    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null, hasError: false };
    }
  
    static getDerivedStateFromError(hasError) {  
        return { hasError: true };  
    }

    componentDidCatch(error, errorInfo) {  
        this.setState({
            error: error,
            errorInfo: errorInfo
          })
        console.log(error, errorInfo);  
    }

    render() {
      if (this.state.errorInfo) { 
          return (
            <div>
            <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
                </details>
             </div>
          );
        } return this.props.children; 
    }
  }

export default Error