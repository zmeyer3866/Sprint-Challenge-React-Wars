import React, { useState, useEffect } from 'react';
import './App.css';
import Character from "./components/Character"
import SearchBar from "./components/SearchBar"
import axios from "axios"
import styled from "styled-components"


// styled-Components
const AppDiv = styled.div`
    text-align: center;
`
const Characters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    position: relative;
`
const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  width: 100%;
  margin: 20px 0;
`
const Last = styled.button`
  padding: 5px;
  vertical-align: middle;
  margin-right: 20px
`;

const Next = styled.button`
  padding: 5px;
  vertical-align: middle;
  margin-left: 20px
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])
  const [pageToShow, setPageToShow] = useState("https://swapi.dev/api/people/?page=1")
  const [searchText, setSearchText] = useState('')


  useEffect(() => {
    if (searchText === '') {
      axios.get(pageToShow)
        .then(response => {
          setCharacters(response.data)
        })
        .catch(err => {
          console.log(err);
        })
    } else {
      axios.get(`https://swapi.dev/api/people/?search=${searchText}`)
        .then(response => {
          setCharacters(response.data)
        })
        .catch(err => {
          console.log(err);
        })
    }

  }, [pageToShow, searchText])



  if (characters.length !== 0) {
    return (
      <AppDiv>
        <Characters>
          <SearchBar SetSearchText={setSearchText} SearchText={searchText} />
          <Header>{(characters.previous !== null) ? <Last onClick={() => { setPageToShow(characters.previous) }}>{`<<`}</Last> : ""} Characters {(characters.next !== null) ? <Next onClick={() => { setPageToShow(characters.next) }}>{`>>`}</Next> : ""}</Header>
          {
            characters.results.map((el) => {
              return <Character info={el} key={el.name} />
            })
          }
        </Characters>
      </AppDiv>
    )
  } else {
    return "...Loading"
  }


}

export default App;