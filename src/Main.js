import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ' ',
      data: '',
      show: false
    };
  }
  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;

    const request = await axios.get(url);
    this.setState({
      data: request.data[0],
      show: true
    });
  }

  updateCityForm = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    return (
      <div style = {{textAlign: 'center'}}>
        <form onSubmit={this.getLocation}>
          <label for='city name'>Enter a location below to know more about it.</label>
          <br />
          <input onChange={this.updateCityForm} type='text' placeholder='Search' style={{width:'50%',margin:'auto', border: 'solid 2px #000'}} size="lg" />
          <br />
          <br />
          <Button type='submit'> Explore  </Button>
        </form>
        <br />
        {this.state.data ? <p>
          Welcome To {this.state.data.display_name} located at {this.state.data.lat} by {this.state.data.lon}
        </p>:''}
        <br />
        {this.state.data ?<img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' />:''}
        <br />
      </div>

    );
  }
}

export default Main;
