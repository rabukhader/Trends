import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {

  let [trendingMovies,setTrendingMovies]=useState([]);
  let [trendingTv,setTrendingTv]= useState([]);
  let [trendingPerson,setTrendingPerson]= useState([]);

  let prefix = "https://image.tmdb.org/t/p/w500/";

  let getTrendingItems= async(mediaType,callback)=>{
    let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f9611f3639744086a73fc49577448073`);
    callback(data.results);
  }


  useEffect( ()=>{
    getTrendingItems("movie",setTrendingMovies);
    getTrendingItems("tv",setTrendingTv);
    getTrendingItems("person",setTrendingPerson);
  },[])

  return (
    <> 
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className='fs-1'>
            <h2>Trending Movies</h2>
            <p>This is Trending movies</p>
          </div>
        </div>
          

        {trendingMovies.map( (movie,index)=>
        <div className="col-md-3 border border-dark my-5" key={index}>
        <div className='text-center'>
          <img src={prefix + movie.poster_path} className='w-100 my-5' alt='' />
          <h2>{movie.title}</h2>
        </div>
      </div>)}
      </div>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className='fs-1'>
            <h2>Trending Tv shows</h2>
            <p>This is Trending Tv Shows</p>
          </div>
        </div>
          

        {trendingTv.map( (movie,index)=>
        <div className="col-md-3 border border-dark my-5" key={index}>
        <div className='text-center'>
          <img src={prefix + movie.poster_path} className='w-100 my-5' alt='' />
          <h2>{movie.name}</h2>
        </div>
      </div>)}
      </div>
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div className='fs-1'>
            <h2>Trending Person</h2>
            <p>This is Trending Person</p>
          </div>
        </div>
          

        {trendingPerson.map( (movie,index)=>
        <div className="col-md-3 border border-dark my-5" key={index}>
        <div className='text-center'>
          <img src={prefix + movie.profile_path} className='w-100 my-5' alt='' />
          <h2>{movie.name}</h2>
        </div>
      </div>)}
      </div>

    </div>
    </>
  )
}
