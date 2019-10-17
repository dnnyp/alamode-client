import React, { Fragment, Component } from 'react'
import { withRouter } from 'react-router-dom'

import { show, destroy, updateTitle } from '../../api/report'
import messages from '../AutoDismissAlert/messages'

import Spinner from 'react-bootstrap/Spinner'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

class Report extends Component {
  constructor () {
    super()

    this.state = {
      report: null,
      newTitle: '',
      changeTitle: false
    }
  }

  componentDidMount () {
    const { alert, match, user } = this.props

    show(match.params.id, user)
      .then(responseData => this.setState({
        report: responseData.data.report,
        newTitle: responseData.data.report.title
      }))
      .catch(error => {
        console.error(error)
        this.setState({ report: null })
        alert({
          heading: 'Get Report Failed',
          message: messages.getReportFailure,
          variant: 'danger'
        })
      })
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onDelete = () => {
    const { alert, history, match, user } = this.props

    destroy(match.params.id, user)
      .then(() => alert({
        heading: 'Report successfully deleted',
        message: messages.destroyReportSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/reports'))
      .catch(error => {
        console.error(error)
        alert({
          heading: 'Failed to delete report',
          message: messages.destroyReportFailure,
          variant: 'danger'
        })
      })
  }

  onEdit = () => {
    this.setState({
      changeTitle: true
    })
  }

  onUpdateTitle = event => {
    event.preventDefault()

    const { alert, match, user } = this.props

    updateTitle(match.params.id, this.state.newTitle, user)
      .then(responseData => this.setState({
        report: responseData.data.report,
        newTitle: responseData.data.report.title,
        changeTitle: false
      }))
      .then(() => alert({
        heading: 'Title successfully updated',
        message: messages.updateReportTitleSuccess,
        variant: 'success'
      }))
      .catch(error => {
        console.error(error)
        alert({
          heading: 'Failed to update report title',
          message: messages.updateReportTitleFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <div>
        {!this.state.report
          ? <Spinner animation="border" />
          : (
            <div className="row">
              <div className="col mx-auto mt-5">
                {!this.state.changeTitle
                  ? (
                    <Fragment>
                      <a rel="noopener noreferrer" href={this.state.report.url} target="_blank"><h3>{this.state.report.title}</h3></a>
                      {this.state.report.owner === this.props.user._id &&
                        <ButtonGroup size="sm" className="mt-3">
                          <Button
                            variant="outline-secondary"
                            onClick={this.onEdit}
                          >
                            Edit Title
                          </Button>
                          <Button
                            variant="outline-secondary"
                            onClick={this.onDelete}
                          >
                            Delete Report
                          </Button>
                        </ButtonGroup>
                      }
                    </Fragment>
                  )
                  : (
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="New Title"
                        required
                        name="newTitle"
                        value={this.state.newTitle}
                        type="text"
                        onChange={this.handleChange}
                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={this.onUpdateTitle}>Update</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  )
                }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default withRouter(Report)
