import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AffirmationContext, { nullAffirmation } from '../../contexts/AffirmationContext'
import AffirmationApiService from '../../services/affirmation-api-service'
import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import CommentForm from '../../components/CommentForm/CommentForm'

export default class AffirmationPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = AffirmationContext

  componentDidMount() {
    const { affirmationId } = this.props.match.params
    this.context.clearError()
    AffirmationApiService.getAffirmation(affirmationId)
      .then(this.context.setAffirmation)
      .catch(this.context.setError)
    AffirmationApiService.getAffirmationComments(affirmationId)
      .then(this.context.setComments)
      .catch(this.context.setError)

    console.log(AffirmationApiService.getAffirmationComments(affirmationId))
  }

  componentWillUnmount() {
    this.context.clearAffirmation()
  }

  renderAffirmation() {
    const { affirmation, comments } = this.context
    return <>
      <h2>{affirmation.title}</h2>
      <p>
        <AffirmationStyle affirmation={affirmation} />
        {affirmation.author.id && <>
          <Hyph />
          <AffirmationAuthor affirmation={affirmation} />
        </>}
        <Hyph />
        <NiceDate date={affirmation.date_created} />
      </p>
      <AffirmationContent affirmation={affirmation} />
      <AffirmationComments comments={comments} />
      <CommentForm />
    </>
  }

  render() {
    const { error, affirmation } = this.context
    let content
    if (error) {
      content = (error.error === `Affirmation doesn't exist`)
        ? <p className='red'>Affirmation not found</p>
        : <p className='red'>There was an error</p>
    } else if (!affirmation.id) {
      content = <div className='loading' />
    } else {
      content = this.renderAffirmation()
    }
    return (
      <Section className='AffirmationPage'>
        {content}
      </Section>
    )
  }
}

function AffirmationStyle({ affirmation }) {
  return (
    <span className='AffirmationPage__style'>
      {' '}
      {affirmation.style}
    </span>
  )
}

function AffirmationAuthor({ affirmation = nullAffirmation }) {
  return (
    <span className='AffirmationPage__author'>
      {affirmation.author.full_name}
    </span>
  )
}

function AffirmationContent({ affirmation }) {
  return (
    <p className='AffirmationPage__content'>
      {affirmation.content}
    </p>
  )
}

function AffirmationComments({ comments = [] }) {
  return (
    <ul className='AffirmationPage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='AffirmationPage__comment'>
          <p className='AffirmationPage__comment-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='AffirmationPage__comment-icon blue'
            />
            {comment.text}
          </p>
          <p className='AffirmationPage__comment-user'>
            {comment.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}
