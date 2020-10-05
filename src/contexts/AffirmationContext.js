  
import React, { Component } from 'react'

export const nullAffirmation = {
  author: {},
  tags: [],
}

const AffirmationContext = React.createContext({
  affirmation: nullAffirmation,
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setAffirmation: () => {},
  clearAffirmation: () => {},
  setComments: () => {},
  addComment: () => {},
})

export default AffirmationContext

export class AffirmationProvider extends Component {
  state = {
    affirmation: nullAffirmation,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setAffirmation = affirmation => {
    this.setState({ affirmation })
  }

  setComments = comments => {
    this.setState({ comments })
  }

  clearAffirmation = () => {
    this.setAffirmation(nullAffirmation)
    this.setComments([])
  }

  addComment = comment => {
    this.setComments([
      ...this.state.comments,
      comment
    ])
  }

  render() {
    const value = {
      affirmation: this.state.affirmation,
      comments: this.state.comments,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setAffirmation: this.setAffirmation,
      setComments: this.setComments,
      clearAffirmation: this.clearAffirmation,
      addComment: this.addComment,
    }
    return (
      <AffirmationContext.Provider value={value}>
        {this.props.children}
      </AffirmationContext.Provider>
    )
  }
}