import React from 'react';
import axios from 'axios';
import Form from './Form';
import WeatherData from './weatherData';


export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ' ',
      weatherData: [],
      data: '',
      show: false
    };
  }
  getLocation = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q=${this.state.searchQuery}&format=json`;

    const weatherUrl = `${process.env.REACT_APP_SERVER}/weather`;
    const expressRes = await axios.get(weatherUrl);
    const request = await axios.get(url);

    this.setState({
      data: request.data[0],
      weatherData: expressRes.data,
      show: true
    });
  }

  updateCityForm = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', border: 'solid 2px #000', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
        <Form getLocation={this.getLocation} updateCityForm={this.updateCityForm}></Form>
        <br />
        {this.state.data && <p>
          Welcome To {this.state.data.display_name} located at {this.state.data.lat} by {this.state.data.lon}
        </p>}
        <br />
        {this.state.data && <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&q&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt='' />}
        <br />
        <WeatherData
          weatherInfo={this.state.weatherData}
        />
      </div>

    );
  }
}

export default Main;
