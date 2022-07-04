import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router'
import { Allcontext } from './Allcontext'

const All = () => {
    const [items,setItems]=useContext(Allcontext)
    const {id}=useParams()
  return (
    <div>
{
    items.filter((e)=>e.productId===id).map((e,index)=>{
        <div className='container' >
                                <div kex={index}>
                                    <img className='image' src={e.imageURL} alt={e.name} />
                                </div>
                                <h3>{e.name}</h3>
                                <span>${e.price} USD <span style={{ color: 'crimson', fontSize: '20px', textDecoration: 'none' }}>Discount: {e.discount}</span></span>
                                <br /> <span> Rating: {e.rating}</span>
                            </div>
    })
}
    </div>
  )
}

export default All