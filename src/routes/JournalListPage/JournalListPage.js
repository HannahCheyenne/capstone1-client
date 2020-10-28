import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import JournalListContext from '../../contexts/JournalListContext'
import JournalApiService from '../../services/journal-api-service'
import { Section } from '../../components/Utils/Utils'
import JournalListItem from '../../components/JournalListItem/JournalListItem'

export default class JournalListPage extends Component {
    static contextType = JournalListContext

    componentDidMount() {
        this.context.clearError()
        JournalApiService.getJournals()
            .then(this.context.setJournalList)
            .catch(this.context.setError)
    }

    renderJournals() {
        const { journalList = [] } = this.context
        if(journalList.length < 1) {
            return (
                <div>You have no journals! Add Journal Entry</div>
            )
        }
        return journalList.map(journal =>
            <JournalListItem
                key={journal.id}
                journal={journal}
            />
        )
    }

    render() {
        const { error } = this.context
        return (
            <>
                <Section list className='JournalListPage'>
                    <div><Link to='/addJournal'>Add Journal</Link></div>
                    {error
                        ? <p className='red'>There was an error, try again</p>
                        : this.renderJournals()}
                </Section>
            </>
        )
    }
}
