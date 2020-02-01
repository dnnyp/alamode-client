import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { scrapeUrl } from '../../api/report'
import messages from '../AutoDismissAlert/messages'

import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Home extends Component {
  constructor () {
    super()

    this.state = {
      url: '',
      jobId: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateReport = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    alert({
      heading: 'Creating Report',
      message: messages.createReportInProgress,
      variant: 'primary'
    })

    scrapeUrl(this.state.url, user)
      .then(responseData => this.setState({
        jobId: responseData.data.job
      }))
      .then(() => history.push(`/reports/new/${this.state.jobId}`))
      .catch(error => {
        console.error(error)
        this.setState({ url: '' })
        alert({
          heading: 'Create Report Failed',
          message: messages.createReportFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Generate a new report:</h3>
          <Form onSubmit={this.onCreateReport}>
            <InputGroup className="mb-3">
              <Form.Control as="select" name="url" defaultValue="default" onChange={this.handleChange}>
                <option value="default" disabled> -- select a website -- </option>
                <option value="https://www.eastdane.com/brands-club-monaco/br/v=1/48853.htm#/?f=merchandiseCategory=%26filterContext=48853%26limit=100%26baseIndex=0">East Dane</option>
                <option value="https://shop.nordstrom.com/brands/club-monaco--18278?page=1">Nordstrom</option>
                <option value="https://www.shopbop.com/club-monaco/br/v=1/10148.htm?view=100&baseIndex=0">Shopbop</option>
              </Form.Control>
              <InputGroup.Append>
                <Button variant="outline-secondary" type="submit">Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
