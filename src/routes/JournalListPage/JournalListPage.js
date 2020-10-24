import React from 'react';
import { Link } from 'react-router-dom'
import JournalPage from '../JournalPage/JournalPage'

export default function JournalListPage() {

    // const journals = this.
    return (
        <>
        <div className="buttons"> 
            <span><Link to='/affirmations'>Affirmations</Link></span>
            {' '}
            <span><Link to='/'>Home</Link></span>
        </div>
        <div><JournalPage /></div>
        </>
    )
}