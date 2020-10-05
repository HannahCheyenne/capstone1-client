import React, { Component } from 'react'

const AffirmationListContext = React.createContext({
  affirmationList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setAffirmationList: () => {},
})
export default AffirmationListContext

export class AffirmationListProvider extends Component {
  state = {
    affirmationList: [],
    error: null,
  };

  setAffirmationList = affirmationList => {
    this.setState({ affirmationList })
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
      affirmationList: this.state.affirmationList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAffirmationList: this.setAffirmationList,
    }
    return (
      <AffirmationListContext.Provider value={value}>
        {this.props.children}
      </AffirmationListContext.Provider>
    )
  }
}