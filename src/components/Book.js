import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Button } from 'reactstrap';
import {addToCart} from '../redux/actions'
const Book =(props)=>{
  return (
    <div>
    {props.book.title}

    <Button color="secondary" size="sm" onClick={()=>props.addToCart(props.book.id)}>Add to cart</Button>{' '}

    </div>
  )
}
const mapDispatchToProps=dispatch=>bindActionCreators({
  addToCart
},
dispatch)
export default connect(null, mapDispatchToProps) (Book)
