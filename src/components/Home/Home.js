import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { scrapeUrl } from '../../api/report'
import messages from '../AutoDismissAlert/messages'

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
    const { url } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>URL</h3>
          <Form onSubmit={this.onScrapeUrl}>
            <Form.Group controlId="url">
              <Form.Label>URL</Form.Label>
              <Form.Control
                required
                name="url"
                value={url}
                type="text"
                placeholder="URL"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(Home)
