import React, { useState } from 'react'
import ReviewData from '../../data/ReviewData'
import './ReviewList.css'

const ReviewList = () => {

  const [flag, setFlag] = useState(false)

  const handleDelete = (id) => {
    ReviewData.splice(id, 1)
    setFlag(!flag)
  }

  return (
    <div className='review-container'>
      {ReviewData.map((e,i)=>{
        return <div key={i} className='review-card'>
          <h2>{e.title}</h2>
          <p>Rating : {e.rating} <span className='star'>&#9733;</span></p>
          {(e.desc !== '') && <p>{e.desc}</p>}
          <button className='button-d' onClick={()=>handleDelete(i)}>Delete</button>
        </div>
      })}
    </div>
  )
}

export default ReviewList