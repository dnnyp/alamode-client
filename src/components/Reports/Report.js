import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { show, destroy } from '../../api/report'
import messages from '../AutoDismissAlert/messages'

import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

class Report extends Component {
  constructor () {
    super()

    this.state = {
      report: null
    }
  }

  componentDidMount () {
    const { alert, match, user } = this.props

    show(match.params.id, user)
      .then(responseData => this.setState({
        report: responseData.data.report
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

  delete = () => {
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

  render () {
    return (
      <div>
        {!this.state.report
          ? <Spinner animation="border" />
          : (
            <div className="row">
              <div className="col mx-auto mt-5">
                <a rel="noopener noreferrer" href={this.state.report.url} target="_blank"><h3>{this.state.report.title}</h3></a>
                <Button
                  variant="primary"
                  onClick={this.delete}
                >
                  Delete this report
                </Button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default withRouter(Report)
