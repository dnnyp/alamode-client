import React from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const UpdateTitle = props => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="New Title"
        required
        name="newTitle"
        value={props.newTitle}
        type="text"
        onChange={props.handleChange}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={props.onUpdateTitle}>Update</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default UpdateTitle
