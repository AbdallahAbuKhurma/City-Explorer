import React, { Component } from 'react';
// import { Table } from 'react-bootstrap';

export class WeatherData extends Component {
  render() {

    return (
      <>
        {console.log(this.props.weatherInfo)}

        {this.props.weatherInfo.constructor !== Object &&
          <>
            {this.props.weatherInfo.map((data, index) => {

              return (
                <div key={index}>
                  <p>{data.date}</p>
                  <p>{data.description}</p>
                </div>
              );
            })
            }
          </>
        }
      </>
    );
  }

}
export default WeatherData;
