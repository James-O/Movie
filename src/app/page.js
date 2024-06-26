import Results from '@/components/results';
import React from 'react'

const API_KEY = process.env.API_KEY;
export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTreanding';
  const res = await fetch(`
  https://api.themoviedb.org/3${
    genre==='fetchTopRated'?`/movie/top_rated`:`/trending/movie/week`}?api_key=${API_KEY}&laguage=en-Us&page=1
  `);
  const data = await res.json();
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }
  const results = data.results;
  console.log(results);
  return (
    <div>
      <Results results={results}/>
    </div>
  )
}
