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
        <Link to='/addAffirmation'>Add Affirmation</Link>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderAffirmations()}
      </Section>
    )
  }
}
