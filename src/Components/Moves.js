import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';


class movies extends Component {
  render() {
    return (
      <div class="container">

        {this.props.moviesInfo &&
                    <Row className="justify-content-md-center">
                      <CardColumns>
                        {this.props.moviesInfo.map((value, index) => {
                          return (
                            <Col md="auto">
                              <Card key={index} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={value.imgUrl} />
                                <Card.Body>
                                  <Card.Title>{value.title}</Card.Title>
                                  <Card.Text>
                                    <p>{value.description}</p>
                                    <p>{value.avrVotes}</p>
                                    <p>{value.totVotes}</p>
                                    <p>{value.pop}</p>
                                    <p>{value.rele}</p>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>

                          );
                        })
                        }

                      </CardColumns>
                    </Row>
        }

      </div>
    );
  }
}

export default movies;
