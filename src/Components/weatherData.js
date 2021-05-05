import React, { Component } from 'react';
import {Table} from 'react-bootstrap';


export class weatherData extends Component {
  render() {
    const list = this.props.weatherInfo.map((data, index) => {
      return (
        <>
          <tr key={index} >
            <td>{index + 1}</td>
            <td>{data.date}</td>
            <td>{data.description}</td>
          </tr>
        </>
      );
    });

    return (
      <>
        <Table striped bordered hover variant="dark" style={{ width: '55%', margin: 'auto', marginTop:'30px' }} >
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </Table>
      </>
    );
  }
}

export default weatherData;

// this.props.weatherInfo.map((data, index) => {
//   return (<div key={index}>
//     <p>{data.date}</p>
//     <p>{data.description}</p>
//   </div>);
// })
