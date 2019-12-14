import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from "styled-components";



export const MyImage = styled.img`
  
  width: 100%;
  border-style: none;
`;

const StarWars = props => {
  return (
    <Col style = {{padding: "2% 0"}}>
        <Card body outline color="secondary">
        <MyImage
          top
          width="100%"
          height = '500vh'
          src={props.imgUrl}
          alt="Card image cap"
          
        />
        <CardTitle>Name: {props.name}</CardTitle>
        <CardText>Gender: {props.gender == "n/a" ? 'Robot' : props.gender}</CardText>
        <CardText>Birth Year: {props.age}</CardText>
        <CardText>Eyes Color: {props.eyesColor}</CardText>
        <CardText>Specie: {props.species}</CardText>
        
      </Card>
    </Col>
  );
};
export default StarWars;



