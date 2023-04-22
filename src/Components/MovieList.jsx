import React from "react";
import gif from '../Assets/amalie-steiness.gif'
import { useEffect, useState } from "react";

const MovieList = () => {
  //loading state
  const [loading, setLoading] = useState(true);

  //data state
  const [data, setData] = useState();

  //error state
  const [error, setError] = useState(null);

  //fetching the data from the API and handling error
  useEffect(() => {
    fetch(`https://swapi.dev/api/films`)
      .then((response) => {
        if (!response.ok) {
          alert(`This is an HTTP Error: The status is ${response.status}`);
          throw new Error(
            `This is an HTTP Error: The status is ${response.status}`
          );
        }
        return response.json();
      })

      .then((actualData) => {
        setData(actualData.results)
        setError(null)
      })
      .catch((error) => {
        console.log(error);  
        setError(null)
        setData(null)
      })
      .finally(() => {
        setLoading(false);
      });
  },[]);

  //rendering the data in our UI

  return (
    <div >
      {loading && <div className="alert-message"><img className="loading" src={gif} alt="loading" /></div>}
      {error && <div className="alert-message">{`There is a problem fetching the data - ${error}`} </div>}
      <div className="movies-grid">
        {data &&
          data.map((item) => {
            return (
              <li className="movie-card" key={item.episode_id}>
                <h3 className="title">{item.title}</h3>
                <p className="date">{new Date(item.release_date)
                .toLocaleDateString('en-Us',{month: 'long', day:'numeric',year:'numeric'})}</p>
                <p className="content">{item.opening_crawl}</p>
                <div className="red-line"></div>
                <button className="link">More Info</button>
              </li>
              
            );
          
          })}
      </div>
    </div>
  );
};

export default MovieList;
