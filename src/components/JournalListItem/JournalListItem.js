import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceDate } from '../Utils/Utils'

export default class JournalListItem extends Component {
  render() {
    const { journal } = this.props
    return (
      <Link to={`/journals/${journal.id}`} className='JournalListItem'>
          <h2 className='JournalListItem__heading'>
            <JournalDate journal={journal} />
          </h2>
      </Link>
    )
  }
}

function JournalDate({ journal }) {
  return (
    <span className='JournalListItem__date'>
      <NiceDate
        date={journal.date_created}
      />
    </span>
  )
}