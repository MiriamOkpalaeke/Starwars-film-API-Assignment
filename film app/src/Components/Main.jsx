import React from 'react'
import '../Styling/Main.css';
import Header from './Header';
import MovieList from './MovieList';

const Main = () => {
  return (
    <div>
      <Header/>
      <MovieList/>
    </div>
  )
}

export default Main