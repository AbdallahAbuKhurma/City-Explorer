import React from 'react';
import axios from 'axios';
import Map from './Map';
import Info from './Info';
import Form from './cityForm';
import WeatherData from './WeatherData';
import Movies from './movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './error';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchQuery: '',
      show: false,
      weatherData: [],
      moviesData: [],
      errorMessage: '',
      showError: false
    };
  }

  getCityName = (event) => {
    this.setState({ searchQuery: event.target.value });
    console.log(this.state.searchQuery);

  };

  getLocationInfo = async (event) => {
    event.preventDefault();
    this.setState({
      showError: false
    });
    try {
      const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;

      const req = await axios.get(url);
      this.setState({
        data: req.data[0],
        show: true
      });
      console.log(req.data);
      console.log(this.state.data);

      this.getWeatherData();
      this.getMoviesData();
    } catch (err) {
      this.setState({
        errorMessage: 'Please fill out the form with your desired location!',
        showError: true
      });
    }

  };

  getWeatherData = async () => {
    const weatherApi = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`);
    console.log(weatherApi.data);

    this.setState({
      weatherData: weatherApi.data,
      show: true
    });
  }

  getMoviesData = async () => {
    const moviesApi = await axios.get(`${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`);
    console.log(moviesApi);

    this.setState({
      moviesData: moviesApi.data,
      show: true
    });
  }

  render() {
    return (
      <>
        <Form
          getLocationInfo={this.getLocationInfo}
          getCityName={this.getCityName}
        />
        {this.state.showError &&

          <Error
            massError={this.state.errorMessage}
          />

        }

        {this.state.show &&
          <>
            <Info
              name={this.state.data.display_name}
              latit={this.state.data.lat}
              longit={this.state.data.lon}
            />
            <Map
              loti={this.state.data.lat}
              long={this.state.data.lon}
            />
            <WeatherData
              weatherInfo={this.state.weatherData}
            />
            <Movies
              moviesInfo={this.state.moviesData}
            />
          </>
        }
      </>
    );
  }
}


export default App;
