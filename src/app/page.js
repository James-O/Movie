'use client'
import React, { useEffect, useState } from 'react'

//const API_KEY = process.env.API_KEY;
export default function Home() {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=7772b80fed6bbdbc413f1213dabadc8b&laguage=en-Us&page=1")
        .then(res =>res.json())
        .then(json =>setMovieList(json.results));
    }
   
    useEffect(()=>{
        getMovie()
    },[]);

  return (
    <div>
        {movieList &&
            (movieList.map((movie)=>(
                <div key={movie.id}>
                    <img style={{width:'300px',height:'250px'}} 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <p>{movie.title}</p>
                </div>
            )))
        }
    </div>
  )
}
