import React from 'react';

class error extends React.Component {
  render() {
    return (
      <div>
        <h4 className="text-center">{this.props.massError}</h4>

      </div>
    );
  }
}

export default error;
