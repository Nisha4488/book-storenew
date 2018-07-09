import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removeFromCart} from '../redux/actions'
const CartItem =(props)=>{
  return(
    <li>
    {props.book.title}
    <button onClick={()=>props.removeFromCart(props.book.id)}>Delete</button>
    </li>
  )
}

const mapDispatchToProps=dispatch=>bindActionCreators({
  removeFromCart
},dispatch)

export default connect(null, mapDispatchToProps)(CartItem)
