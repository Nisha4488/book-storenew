import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class  SearchBar extends React.Component{
  render(){
  return(
    <div>
    <FormGroup>
          <Label >Search Term</Label>
          <Input type="text" onChange = {e=>this.props.updateFilterPhraseFunc(e.target.value)}/>
        </FormGroup>
    </div>
  )
}
}
export default SearchBar
