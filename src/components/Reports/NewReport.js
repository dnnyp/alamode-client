import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class NewReport extends Component {
  constructor () {
    super()

    this.state = {
      jobId: ''
    }
  }

  componentDidMount () {
    const { match } = this.props

    this.setState({ jobId: match.params.jobId })
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
