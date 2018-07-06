import React from 'react'
import CartItem from './CartItem'
const Cart =(props)=>{
  let listOfCartItems=props.booksInCart.map(book=><CartItem key={book.id} book={book} removeFromCartFunc={props.removeFromCartFunc}/>)
  return (
    <ul>
    {listOfCartItems}
    </ul>
  )
}
export default Cart
