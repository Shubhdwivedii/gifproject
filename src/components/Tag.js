import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios';

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const Tag = () => {

  const [gif, setGif] = useState('');
  const [tag, setTag] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchGifs() {
    setLoading(true);
    const {data} = await axios.get(`${url}&tag=${tag}`);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc);
    setLoading(false);
  }

  useEffect(() => {
    fetchGifs();
  },[])

  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4'>
      <h1 className='font-bold underline uppercase text-xl mt-3'>RANDOM {tag} GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt='gifs' width={"450"}/>)
      }

      <input
        className='w-10/12 mb-1 py-2 rounded-lg'
        onChange={(e) => setTag(e.target.value)}
        value={tag}
      />
      <button 
      onClick={() => fetchGifs()}
      className='w-10/12 bg-yellow-300 text-lg py-2 rounded-lg mb-5'>Generate</button>
    </div>
  )
}

export default Tag