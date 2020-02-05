import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ProgressBar from 'react-bootstrap/ProgressBar'

import messages from '../AutoDismissAlert/messages'

const apiUrl = require('./../../apiConfig').default
const io = require('socket.io-client')
const socket = io(apiUrl)

class NewReport extends Component {
  constructor () {
    super()
    this.state = {
      progress: 0
    }
  }

  componentDidMount () {
    const { alert, match, history } = this.props

    socket.on(match.params.jobId + '-p', data => {
      this.setState({ progress: data.progress })
    })

    socket.on(match.params.jobId + '-c', data => {
      this.setState({ progress: 100 })
      alert({
        heading: 'Create Report Success',
        message: messages.createReportSuccess,
        variant: 'success'
      })
      history.push(`/reports/${data.reportId}`)
    })
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Generating Report</h3>
          <p>Please do not refresh the page and wait while we are preparing your report.</p>

          <ProgressBar animated now={this.state.progress} />
        </div>
      </div>
    )
  }
}

export default withRouter(NewReport)
