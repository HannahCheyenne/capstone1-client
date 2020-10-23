import React, { Component } from 'react'
import AffirmationContext from '../../contexts/AffirmationContext'
import AffirmationApiService from '../../services/affirmation-api-service'
import { Button, Textarea } from '../Utils/Utils'

export default class CommentForm extends Component {
  static contextType = AffirmationContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { affirmation } = this.context
    const { text } = ev.target
    AffirmationApiService.postComment(affirmation.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </Textarea>
        </div>
        <Button type='submit'>
          Post comment
        </Button>
      </form>
    )
  }
}
