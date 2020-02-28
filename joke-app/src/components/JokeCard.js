import React from "react";

import { Card, CardText, CardBody } from "reactstrap";
import "./styles.css";

const JokeCard = props => {
  return (
    <div className="card-width">
      <Card>
        <CardBody>
          <CardText>{props.joke.joke}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default JokeCard;
