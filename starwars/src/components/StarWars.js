import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const StarWars = props => {
  return (
    <Col>
        <Card body outline color="secondary">
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.gender}</CardText>
        <CardText>{props.age}</CardText>
        <Button>Button</Button>
      </Card>
    </Col>
  );
};
export default StarWars;

  {/* <Row>
      <Col sm="6">
        <Card body>
  <CardTitle>{props.name}</CardTitle>
  <CardText>Gender: {props.gender}<br></br>Hair Color: {props.age}</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row> */}
 {/* <h1>Name: {props.name}</h1>
      <h2>Gender: {props.gender}</h2>
      <h3>Eyes Color: {props.eyesColor}</h3>
  <h4>Skin Color: {props.skin}</h4> */}


