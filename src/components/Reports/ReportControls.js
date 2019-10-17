import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ReportControls = props => {
  return (
    <Fragment>
      <a rel="noopener noreferrer" href={props.url} target="_blank"><h3>{props.title}</h3></a>
      {props.owner === props.user &&
        <ButtonGroup size="sm" className="mt-3">
          <Button
            variant="outline-secondary"
            onClick={props.onClick}
          >
            Edit Title
          </Button>
          <Button
            variant="outline-secondary"
            onClick={props.onDelete}
          >
            Delete Report
          </Button>
        </ButtonGroup>
      }
    </Fragment>
  )
}

export default ReportControls
