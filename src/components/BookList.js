import React from 'react'
import Book from './Book'
const BookList =(props)=>{
  let listOfBooks = props.books.map(book=><Book key={book.id} book={book} addToCartFunc={props.addToCartFunc}/>)
  return (
    <div>
    {listOfBooks}
    </div>
  )
}

export default BookList
