import React from 'react'
import { useSelector } from 'react-redux'




function TopProduct({product}) {

    const FourProudct = product.slice(0,4)
    console.log(FourProudct)
  return (
    <div className='flex items-center justify-center'>
        {FourProudct.map((item) => <div key={item.id}>
    <img src={item.img} />
    <p>{item.title}</p>
    <span> ${item.price}</span>
        </div>)}
    
    </div>
  )
}

export default TopProduct