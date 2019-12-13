import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import StarWars from './components/StarWars'
import styled from 'styled-components'
import { Container, Row } from "reactstrap";

const Cards = styled.div`
 background-color: lightblue;
 width:80%;



`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [chars,setChars] = useState([])
  useEffect(()=>{
    axios
    .get('https://swapi.co/api/people/')
    .then(res=>{
      // console.log(res.data.results)
      setChars(res.data.results)
    })

  },[])
  console.log(chars)
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      { <Container>
        <Row>
      {
       chars.map(people => 
        
         <StarWars
          name = {people.name}
          gender = {people.gender}
          age = {people.hair_color}
          eyesColor = {people.eye_color}
          skin = {people.skin_color}
         />
         
      )}
     </Row>
      </Container> }
    </div>
  );
}
 
export default App;


