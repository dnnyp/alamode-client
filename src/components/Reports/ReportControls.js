import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const styles = {
  header: {
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: 'calc(1em + 1vw)'
  }
}

const ReportControls = props => {
  return (
    <Fragment>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-7 col-md-10 p-0 m-0">
            <a rel="noopener noreferrer" href={props.url} target="_blank" style={styles.header}>{props.title}</a>
          </div>
          <div className="col-auto justify-content-end col-sm-4 col-md-2 d-flex p-0 m-0">
            {props.owner === props.user &&
              <ButtonGroup>
                <Button
                  variant="outline-secondary"
                  onClick={props.onClick}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={props.onDelete}
                >
                  Delete
                </Button>
              </ButtonGroup>
            }
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ReportControls
