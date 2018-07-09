import {FETCH_BOOKS, ADD_TO_CART, REMOVE_FROM_CART} from './actions'


let initialState=[]
export default (state=initialState, action)=>{
  switch (action.type) {
    case FETCH_BOOKS:
      return [...action.payload] //this is only going to run when the app loads first, it dosesn't have state yet we are stetting initialstate
    case ADD_TO_CART:
    let unselectedBook =state.filter(book=>book.id!==action.payload)
    let selectedBook =state.filter(book=>book.id===action.payload)[0]; // this return array []
    let updatedBook={
      ...selectedBook,
      inCart: true
    }
    return[...unselectedBook, updatedBook].sort((a,b)=>a.id>b.id)


    case REMOVE_FROM_CART:
    let unselectedBookCart=state.filter(book=>book.id!==action.payload)
    let selectedBookCart =state.filter(book=>book.id===action.payload)[0]
    let updatedBookCart={
      ...selectedBookCart,
      inCart: false
    }
    return [...unselectedBookCart, updatedBookCart].sort((a,b)=>a.id>b.id)
    default:
      return state;
    }
}
