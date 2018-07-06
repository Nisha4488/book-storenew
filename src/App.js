import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopNav from './components/TopNav'
import BookList from './components/BookList'
import Cart from './components/Cart'
import axios from 'axios'
import SearchBar from './components/SearchBar'


class App extends Component { //we need to populate app component i.e class so need state
  state={
    books:[],
    filterPhrase:''
  }

  componentDidMount(){ //we need to get the api
    axios.get('http://localhost:8000/books')
    .then(response=>this.setState({books:response.data}))
  }

  addToCart=(id)=>{
    let updatedBookList =this.state.books.map(book=>{
      if(book.id===id){
        book.inCart=true;
      }
      return book;
    })
    this.setState({books:updatedBookList})
  }

  removeFromCart=(id)=>{      //created methods, need to specify in render and dfine same method as function in components
    let updatedBookList =this.state.books.map(book=>{
      if(book.id===id){
        book.inCart=false;
      }
      return book;
    })
    this.setState({books:updatedBookList})
  }

  updateFilterPhrase=(str)=>{
    this.setState({filterPhrase :str})
  }
  render() {
    let mainBookList=this.state.books.filter(book=>book.title.includes(this.state.filterPhrase))
    let listOfBooksInCart=this.state.books.filter(book=>book.inCart)
    return (
      <div className="App">
      <TopNav/>
      <Container fluid>
       <Row>
         <Col xs="7">
         <SearchBar updateFilterPhraseFunc={this.updateFilterPhrase}/>
         <BookList books={mainBookList} addToCartFunc={this.addToCart} /></Col>  {/*..earlier it was this.state.books*/}
         <Col xs="5"><Cart booksInCart={listOfBooksInCart} removeFromCartFunc={this.removeFromCart}/></Col>
       </Row>
       </Container>
      </div>
    );
  }
}

export default App;
