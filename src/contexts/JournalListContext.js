import React, { Component } from 'react'

const JournalListContext = React.createContext({
  journalList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setJournalList: () => {},
})
export default JournalListContext

export class JournalListProvider extends Component {
  state = {
    journalList: [],
    error: null,
  };

  setJournalList = journalList => {
    this.setState({ journalList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      journalList: this.state.journalList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setJournalList: this.setJournalList,
    }
    return (
      <JournalListContext.Provider value={value}>
        {this.props.children}
      </JournalListContext.Provider>
    )
  }
}