import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import { index, destroy } from '../../api/report'
import messages from '../AutoDismissAlert/messages'

import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

const styles = {
  reportTitle: {
    display: 'block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  }
}

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

  onDelete = (id) => {
    const { alert, user } = this.props

    destroy(id, user)
      .then(() => alert({
        heading: 'Report successfully deleted',
        message: messages.destroyReportSuccess,
        variant: 'success'
      }))
      .then(() => {
        const refreshReports = [...this.state.reports].filter(report => report._id !== id)
        this.setState({
          reports: refreshReports
        })
      })
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
    const reportsJsx = this.state.reports.map(report => (
      <li className="list-group-item d-flex justify-content-between" key={report._id}>
        <Link to={`/reports/${report._id}`} style={styles.reportTitle}>{report.title}</Link>
        {report.owner === this.props.user._id &&
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => this.onDelete(report._id)}
          >
            Delete
          </Button>
        }
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
