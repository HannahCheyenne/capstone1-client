  
import React, { Component } from 'react'


export const nullJournal = {
  author: {},//EDIT THIS
  tags: [],
}

const JournalContext = React.createContext({
  journal: nullJournal,
  error: null,
  setError: () => {},
  clearError: () => { },
  setJournal: () => {},
  clearJournal: () => {},
})

export default JournalContext

export class JournalProvider extends Component {
  state = {
    journal: nullJournal,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setJournal = journal => {
    this.setState({ journal })
  }

  clearJournal = () => {
    this.setJournal(nullJournal)
  }

  render() {
    const value = {
      journal: this.state.journal,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setJournal: this.setJournal,
      clearJournal: this.clearJournal,
    }
    return (
      <JournalContext.Provider value={value}>
        {this.props.children}
      </JournalContext.Provider>
    )
  }
}