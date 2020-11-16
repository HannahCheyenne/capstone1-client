import React, { Component } from 'react'
import AffirmationContext from '../../contexts/AffirmationContext'
import AffirmationApiService from '../../services/affirmation-api-service'
import { Button, Textarea } from '../Utils/Utils'

export default class CommentForm extends Component {
  static contextType = AffirmationContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { affirmation } = this.context
    const { content } = ev.target
    AffirmationApiService.postComment(affirmation.id, content.value)
      .then(this.context.addComment)
      .then(() => {
        content.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='content'>
          <Textarea
            required
            aria-label='Type a comment...'
            name='content'
            id='content'
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
