import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';



const StarWars = props => {
  return (
    <Col style = {{padding: "2% 0"}}>
        <Card body outline color="secondary">
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Gender: {props.gender == "n/a" ? 'Robot' : props.gender}</CardText>
        <CardText>Birth Year: {props.age}</CardText>
        <CardText>Eyes Color: {props.eyesColor}</CardText>
        
      </Card>
    </Col>
  );
};
export default StarWars;



