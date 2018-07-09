import React from 'react'
import CartItem from './CartItem'
import {connect} from 'react-redux'
const Cart =(props)=>{
  let listOfCartItems=props.booksInCart.map(book=><CartItem key={book.id} book={book}/>)
  return (
    <ul>
    {listOfCartItems}
    </ul>
  )
}
const mapStateToProps=state=>({
  booksInCart: state.books.filter(book=>book.inCart)
})
export default connect(mapStateToProps)(Cart)
