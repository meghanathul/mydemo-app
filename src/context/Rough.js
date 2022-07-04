import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Allcontext } from './Allcontext'

const Rough = () => {
  const [items,setItems]=useContext(Allcontext)
  return (
    <div>
        {
          items.map((e,index)=>{
            return(
              <Link className='list' key={index} to={`data/${e.productId}`}>
                            <div className='container' >
                                <div >
                                    <img className='image' src={e.imageURL} alt={e.name} />
                                </div>
                                <h3>{e.name}</h3>
                                <span>${e.price} USD <span style={{ color: 'crimson', fontSize: '20px', textDecoration: 'none' }}>Discount: {e.discount}</span></span>
                                <br /> <span> Rating: {e.rating}</span>
                            </div>
                        </Link>

            )
          })
        }
    </div>
  )
}

export default Rough