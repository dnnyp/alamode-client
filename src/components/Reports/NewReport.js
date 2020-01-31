import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

const apiUrl = require('./../../apiConfig').default
const io = require('socket.io-client')
const socket = io(apiUrl)

class NewReport extends Component {
  componentDidMount () {
    const { match, history } = this.props

    socket.on(match.params.jobId, data => {
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
