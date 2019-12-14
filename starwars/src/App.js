import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import StarWars from "./components/StarWars";
import styled from "styled-components";
import { Container, Row } from "reactstrap";
import Pagination from './components/Pagination'
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = styled.div`
  background-color: lightblue;
  width: 80%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [chars, setChars] = useState([]);
  const [page, setPages] = useState(1);

  useEffect(() => {
    
    axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(res => {
      // console.log(res.data.results)
      setChars(res.data.results);
    })

    .catch(err => `something is not right ${err}`)
  },[page]);

   console.log(chars);

  const nextPage = () => page == page.length ? null : setPages(page + 1 )

    
  
  const previousPage = () => page == 1 ? null : setPages(page - 1)

  
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {
        <Container style={{ width: "50%" }}>
          {chars.map(people => (
            <StarWars
              key={people.name}
              name={people.name}
              gender={people.gender}
              age={people.birth_year}
              eyesColor={people.eye_color}
            />
          ))}
        </Container>
      }
      <Pagination
      previous = {()=> previousPage()}
      next = {() => nextPage()}
      pageNumber = {page}
      />

    </div>
  );
};

export default App;
