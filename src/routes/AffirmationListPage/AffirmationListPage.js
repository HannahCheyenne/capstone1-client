import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AffirmationListContext from '../../contexts/AffirmationListContext'
import AffirmationApiService from '../../services/affirmation-api-service'
import { Section } from '../../components/Utils/Utils'
import AffirmationListItem from '../../components/AffirmationListItem/AffirmationListItem'

export default class AffirmationListPage extends Component {
  static contextType = AffirmationListContext

  componentDidMount() {
    this.context.clearError()
    AffirmationApiService.getAffirmations()
      .then(this.context.setAffirmationList)
      .catch(this.context.setError)
  }

  renderAffirmations() {
    const { affirmationList = [] } = this.context
    return affirmationList.map(affirmation =>
      <AffirmationListItem
        key={affirmation.id}
        affirmation={affirmation}
      />
    )
  }

  render() {
    const { error } = this.context
    return (
      <Section list className='AffirmationListPage'>
        <div className="buttons">
          <span><Link to='/journals'>Journals</Link></span>
          {' '}
          <span><Link to='/'>Landing Page</Link></span>
        </div>
        <Link to='/addAffirmation'>Add Affirmation</Link> {/* BUILD OUT THIS COMPONENT */}
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderAffirmations()}
      </Section>
    )
  }
}
