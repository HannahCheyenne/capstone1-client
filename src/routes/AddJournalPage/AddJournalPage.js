import React, { Component } from 'react'
import AddJournalForm from '../../components/AddJournalForm/AddJournalForm'
import { Section } from '../../components/Utils/Utils'

export default class AddJournalPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleSubmitSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/journals'
    history.push(destination)
  }

  render() {
    return (
      <Section className='AddJournalPage'>
        <h2>Add Journal Entry</h2>
        <AddJournalForm
          onSubmitSuccess={this.handleSubmitSuccess}
        />
      </Section>
    )
  }
}