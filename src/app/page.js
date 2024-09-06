// 'use client'
// import React, { useEffect, useState } from 'react'

import Results from "@/components/results";

const API_KEY = process.env.API_KEY;
export default async function Home({searchParams}) {
    // const [movieList,setMovieList] = useState([])
    const genre = searchParams.genre || 'fetchTrending';

    const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await res.json();
    if(!res.ok){
        throw new Error('failed to fetch data')
    }
    const results = data.results;
    //console.log(results);
    // const getMovie = ()=>{
    //     fetch("https://api.themoviedb.org/3/discover/movie?api_key=7772b80fed6bbdbc413f1213dabadc8b&laguage=en-Us&page=1")
    //     .then(res =>res.json())
    //     .then(json =>setMovieList(json.results));
    // }
   
    // useEffect(()=>{
    //     getMovie()
    // },[]);

  return (
    <div>
        <Results results={results}/>
        {/* {movieList &&
            (movieList.map((movie)=>(
                <div key={movie.id}>
                    <img style={{width:'300px',height:'250px'}} 
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <p>{movie.title}</p>
                </div>
            )))
        } */}
    </div>
  )
}
