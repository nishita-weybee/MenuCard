import React from 'react'

function Loader() {
  return (
    <div>
     <img src={require('./loader-2_food.gif')} alt='loader' className='loader' />
    </div>
  )
}

export default Loader
