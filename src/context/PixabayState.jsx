import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {

    const [imageData, setImageData] = useState([])
    const [search, setSearch] = useState('london');

    const apiKey = '36972524-015e85aa8657f54c20e3d8bc3'

    useEffect(() => {
    const fetchData = async () => {
        const api = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${search}&image_type=photo&per_page=100`);
        const data = await api.json();
        setImageData(data.hits)
        console.log(data.hits)
      }
      fetchData()
    }, [search])
    
    const fetchImageByCategory = async (cat) => {
      const api = await fetch(`https://pixabay.com/api/?key=${apiKey}&category=${cat}&image_type=photo&per_page=100`);
      const data = await api.json();
      setImageData(data.hits)
      console.log(data.hits)
    }
    



  return (
    <PixabayContext.Provider value={{
        imageData,
        fetchImageByCategory,
        setSearch
    }}>
        {props.children}
    </PixabayContext.Provider>
  )
}

export default PixabayState