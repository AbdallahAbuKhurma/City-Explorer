import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <p>{this.props.name}</p>
          <p>Latitude: {this.props.latit}</p>
          <p>Longitude: {this.props.longit}</p>
        </div>
      </>
    );
  }
}

export default Info;
