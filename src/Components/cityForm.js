import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class cityForm extends React.Component {
  render() {
    return (

      <div className="row d-flex justify-content-center">
        <div className="col-md-4" >
          <div className="text-center">
            <h1>City Explorer</h1>
            <br />
            <Form onSubmit={this.props.getLocationInfo} style={{ width: '20rem' }}>
              <Form.Group controlId="formBasicEmail" className="text-center">
                <Form.Control className="text-center" style={{ width: '40rem' }} type="text" placeholder="Enter City Name..." onChange={this.props.getCityName} />
                <Form.Text className="text-muted">
                  Learn About The City You Are Searching For
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit" style={{ width: '20rem' }} >Explore</Button>
            </Form>
            <br />
          </div>
        </div>
      </div>



    );
  }
}

export default cityForm;
