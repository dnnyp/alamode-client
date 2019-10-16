import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { index } from '../../api/report'
import messages from '../AutoDismissAlert/messages'

import Spinner from 'react-bootstrap/Spinner'

class Reports extends Component {
  constructor () {
    super()

    this.state = {
      reports: []
    }
  }

  componentDidMount () {
    const { alert, user } = this.props

    index(user)
      .then(responseData => this.setState({
        reports: responseData.data.reports
      }))
      .catch(error => {
        console.error(error)
        this.setState({ reports: [] })
        alert({
          heading: 'Get Reports Failed',
          message: messages.getReportsFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const reportsJsx = this.state.reports.map(report => (
      <li className="list-group-item d-flex justify-content-between" key={report._id}>
        <Link to={`/reports/${report._id}`}>{report.title}</Link>
      </li>
    ))

    return (
      <div>
        {!this.state.reports.length
          ? <Spinner animation="border" />
          : (
            <div className="row">
              <div className="col-sm-10 col-md-8 mx-auto mt-5">
                <h3>Reports</h3>
                <ul className="list-group">
                  {reportsJsx}
                </ul>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default withRouter(Reports)
