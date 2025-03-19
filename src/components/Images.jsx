import React, { useContext } from 'react'
import PixabayContext from '../context/PixabayContext'


const Images = () => {
    const { imageData } = useContext(PixabayContext)
    
  return (
    <>
        <div className='masonry-grid'>
            {imageData.map((image) => (
                
                    <div key={image.id} className="masonry-item">
                        <img loading='lazy' src={image.largeImageURL} alt="image" className='masonry-img'/>
                    </div>
               
            ))}
        </div>
    </>
  ) 
}

export default Images