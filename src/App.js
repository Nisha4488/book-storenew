import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TopNav from './components/TopNav'
import BookList from './components/BookList'
import Cart from './components/Cart'
import axios from 'axios'




class App extends Component { //we need to populate app component i.e class so need state
render() {
  return (
    <div className="App">
      <TopNav/>
      <Container fluid>
       <Row>
         <Col xs="7">

          <BookList />
         </Col> 
         <Col xs="5">
          <Cart/>
         </Col>
       </Row>
       </Container>
      </div>
    );
  }
}
export default (App);
