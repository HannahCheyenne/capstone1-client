import React, { Component } from 'react'
import AddAffirmationForm from '../../components/AddAffirmationForm/AddAffirmationForm'
import { Section } from '../../components/Utils/Utils'

export default class AddAffirmationPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSubmitSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/affirmations'
    history.push(destination)
  }

  render() {
    return (
      <Section className='AddAffirmationPage'>
        <h2>Post Affirmation</h2>
        <AddAffirmationForm
          onSubmitSuccess={this.handleSubmitSuccess}
        />
      </Section>
    )
  }
}