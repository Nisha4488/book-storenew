import React from 'react'
import Book from './Book'
import { connect } from 'react-redux'
import {  FormGroup, Label, Input } from 'reactstrap';

class BookList extends React.Component{

  state = {
    filterPhrase:''
  }

  render() {
    let listOfBooks = this.props.books
    .filter(book => book.title.includes(this.state.filterPhrase))
    .map(book =><Book key={book.id} book={book} />)
return (
    <div>
    <FormGroup>
          <Label >Search Term</Label>
          <Input type="text" onChange={e=>this.setState({filterPhrase:e.target.value})}/>
        </FormGroup>
    {listOfBooks}
    </div>
    )
  }
}

const mapStateToProps=(state,props)=>({
  books: state.books
})

export default connect(mapStateToProps)(BookList) //);//get hold of store state..connect mapStateToProps creates the relationship b/w booklist and store
