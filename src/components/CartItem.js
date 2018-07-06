import React from 'react'
const CartItem =(props)=>{
  return(
    <li>
    {props.book.title}
    <button onClick={()=>props.removeFromCartFunc(props.book.id)}>Delete</button>
    </li>
  )
}

export default CartItem
