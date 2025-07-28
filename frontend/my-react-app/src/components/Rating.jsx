import React, { useState, useEffect } from 'react';



const Rating = ({rating, color, text}) => {
  

  return (
    <div className='rating'>
        <span>
            <i className={rating >= 1.0?'fas fa-star':rating >= 0.5 ? 'fas fa-star-half-alt': 'far fa-star'} style={{color:color}} />
        </span>

        <span>
            <i className={rating >= 2.0?'fas fa-star':rating >= 1.5 ? 'fas fa-star-half-alt': 'far fa-star'} style={{color:color}} />
        </span>
        
        <span>
            <i className={rating >= 3.0?'fas fa-star':rating >= 2.5 ? 'fas fa-star-half-alt': 'far fa-star'} style={{color:color}} />
        </span>
        <span>
            <i className={rating >= 4.0?'fas fa-star':rating >= 3.5 ? 'fas fa-star-half-alt': 'far fa-star'} style={{color:color}} />
        </span>

        <span>
            <i className={rating >= 5.0?'fas fa-star':rating >= 4.5 ? 'fas fa-star-half-alt': 'far fa-star'} style={{color:color}} />
        </span>
        
        <p>Rating {text}</p>




    </div>
  )
}

export default Rating