import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <>
        <div className="text-center">
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.props.loti},${this.props.long}&zoom=10`} alt="" width="600px" />
        </div>
        <br />


      </>
    );
  }
}

export default Map;
