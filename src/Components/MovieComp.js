import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class MovieComp extends Component {
  render() {
    return (
      <>
        <Card key={this.props.key} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title className="text-center">{this.props.title}</Card.Title>
            <Card.Text className="text-center">
              <p>{this.props.description}</p>
              <p>{this.props.avrVotes}</p>
              <p>{this.props.totVotes}</p>
              <p>{this.props.pop}</p>
              <p>{this.props.rele}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default MovieComp;
