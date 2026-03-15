import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios';
import useGif from '../hooks/useGif';

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  
const Random = () => {

  const {gif, loading, fetchGifs} = useGif();
  
  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4'>
      <h1 className='font-bold underline uppercase text-xl mt-3'>A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt='gifs' width={"450"}/>)
      }
      <button 
      onClick={() => fetchGifs()}
      className='w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-5'>Generate</button>
    </div>
  )
}

export default Random