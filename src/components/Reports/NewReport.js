import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import messages from '../AutoDismissAlert/messages'

const apiUrl = require('./../../apiConfig').default
const io = require('socket.io-client')
const socket = io(apiUrl)

class NewReport extends Component {
  componentDidMount () {
    const { alert, match, history } = this.props

    socket.on(match.params.jobId, data => {
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
        </div>
      </div>
    )
  }
}

export default withRouter(NewReport)
