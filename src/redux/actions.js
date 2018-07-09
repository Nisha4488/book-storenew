import axios from 'axios'

export const FETCH_BOOKS ='FETCH_BOOKS'
export const ADD_TO_CART ='ADD_TO_CART'
export const REMOVE_FROM_CART ='REMOVE_FROM_CART'

export const fetchBooks =()=>{
  return dispatch => {
    axios.get('http://localhost:8000/books')
    .then(response=>{
      dispatch({
      type:FETCH_BOOKS,
      payload:response.data
    })
  })
  }
}


export const addToCart =id =>{
  return dispatch=>{
    dispatch({
      type:ADD_TO_CART,
      payload:id
    })
  }
}

export const removeFromCart =id =>{
  return dispatch=>{
    dispatch({
      type:REMOVE_FROM_CART,
      payload:id
    })
  }
}
