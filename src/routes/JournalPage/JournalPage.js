import React, { Component } from 'react'
import JournalContext from '../../contexts/JournalContext'
import JournalApiService from '../../services/journal-api-service'
import { NiceDate, Section } from '../../components/Utils/Utils'

export default class JournalPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = JournalContext

  componentDidMount() {
    const { journalId } = this.props.match.params
    this.context.clearError()
    JournalApiService.getJournal(journalId)
      .then(this.context.setJournal)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearJournal()
  }

  renderJournal() {
    const { journal } = this.context
    return <>
      <h2>{journal.title}</h2>
      <p>
        <NiceDate date={journal.date_created} />
      </p>
      <JournalContent journal={journal} />
    </>
  }

  render() {
    const { error, journal } = this.context
    let content
    if (error) {
      content = (error.error === `Journal doesn't exist`)
        ? <p className='red'>Journal not found</p>
        : <p className='red'>There was an error</p>
    } else if (!journal.id) {
      content = <div className='loading' />
    } else {
      content = this.renderJournal()
    }
    return (
      <Section className='JournalPage'>
        {content}
      </Section>
    )
  }
}

function JournalContent({ journal }) {
  return (
    <p className='JournalPage__content'>
      {journal.content}
    </p>
  )
}

