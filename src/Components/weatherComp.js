import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class weatherComp extends Component {
  render() {
    return (
      <>
        <Card key={this.props.key} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title className="text-center">{this.props.date}</Card.Title>
            <Card.Text className="text-center">{this.props.description}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default weatherComp;
