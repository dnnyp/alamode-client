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
      created: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onScrapeUrl = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    scrapeUrl(this.state.url, user)
      .then(responseData => this.setState({
        created: responseData.data.report._id
      }))
      .then(() => alert({
        heading: 'Create Report Success',
        message: messages.createReportSuccess,
        variant: 'success'
      }))
      .then(() => history.push(`/reports/${this.state.created}`))
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
    // <option value="" disabled>East Dane</option>
    // <option value="" disabled>Nordstrom</option>
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Generate a new report:</h3>
          <Form onSubmit={this.onScrapeUrl}>
            <InputGroup className="mb-3">
              <Form.Control as="select" name="url" defaultValue="default" onChange={this.handleChange}>
                <option value="default" disabled> -- select a website -- </option>
                <option value="https://www.shopbop.com/club-monaco/br/v=1/10148.htm">Shopbop</option>
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
