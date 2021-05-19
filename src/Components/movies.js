import React, { Component } from 'react';
import Movie from './MovieComp';
import CardColumns from 'react-bootstrap/CardDeck';
// import Card from 'react-bootstrap/Card';
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
                    <Movie
                      key={index}
                      src={value.imgUrl}
                      title={value.title}
                      description = {value.description}
                      avrVotes = {value.avrVotes}
                      totVotes = {value.totVotes}
                      pop = {value.pop}
                      rele = {value.rele}
                    />
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
