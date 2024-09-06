'use client'
import React, { useEffect, useState } from 'react'

const API_KEY = process.env.API_KEY;

export default function Home() {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie/week?api_key=${API_KEY}&laguage=en-Us&page=1`)
        .then(res =>res.json())
        .then(json =>{
          console.log(json.results)
          setMovieList(json.results)});
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



// 'use client'
// import Results from '@/components/results';
// import { useState,useEffect } from 'react';
// //import {Suspense} from 'react'

// const API_KEY = process.env.API_KEY;

// export default async function Home() {
//   const [results,setMovieList] = useState([])
// //export default async function Home({searchParams}) {
//   //let genre = 'fetchTrending'
//   //const genre = searchParams.genre || 'fetchTrending';
//   //const genre = 'fetchTrending';
//   // const res = await fetch(`
//   // https://api.themoviedb.org/3${
//   //   genre==='fetchTopRated'?`/movie/top_rated`:`/trending/movie/week`}?api_key=${API_KEY}&laguage=en-Us&page=1
//   // `);
//   useEffect(()=>{
//     fetch(`
//   https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&laguage=en-Us&page=1
//   `)
//   .then(res =>res.json())
//   .then(json =>{
//     console.log(json.results)
//     setMovieList(json.results)
//   });
//   },[])
//   // const data = await res.json();
//   // if(!res.ok){
//   //   throw new Error('Failed to fetch data');
//   // }
//   // const results = await data.results;
//   // console.log(results);
//   return (
//     <div>
//       {results && <Results results={results}/>}
//     </div>
//   )
// }
