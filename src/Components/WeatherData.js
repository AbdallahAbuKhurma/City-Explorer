import React, { Component } from 'react';
import Weather from './weatherComp';
import { CardColumns } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

class WeatherData extends Component {
  render() {
    return (
      <div class="container">
        <h3 className="text-center">Check The Weather For 16 Days</h3>
        <br />
        {this.props.weatherInfo &&
          <Row className="justify-content-md-center">
            <CardColumns>

              {this.props.weatherInfo.map((value, index) => {
                return (
                  <Col md="auto">
                    <Weather
                      key={index}
                      date={value.date}
                      description={value.description}
                    />
                  </Col>
                );
              })}
            </CardColumns>
          </Row>

        }
        <br />
      </div>
    );
  }
}

export default WeatherData;
