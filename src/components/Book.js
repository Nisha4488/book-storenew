import React from 'react'
import { Button } from 'reactstrap';
const Book =(props)=>{
  return (
    <div>
    {props.book.title}

    <Button color="secondary" size="sm" onClick={()=>props.addToCartFunc(props.book.id)}>Add to cart</Button>{' '}

    </div>
  )
}
export default Book
