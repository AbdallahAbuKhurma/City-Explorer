import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';


export class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getLocation}>
          <label htmlFor='city name'>Enter a location below to know more about it.</label>
          <br />
          <input onChange={this.props.updateCityForm} type='text' placeholder='Search' style={{ width: '50%', margin: 'auto', border: 'solid 2px #000' }} size="lg" />
          <br />
          <br />
          <Button type='submit'> Explore  </Button>
        </form>
      </div>
    );
  }
}

export default Form;
