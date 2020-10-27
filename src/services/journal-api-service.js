import config from '../config';
import TokenService from './token-service';

const JournalApiService = {
  getJournals() {
    return fetch(`${config.API_ENDPOINT}/journals`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getJournal(journalId) {
    return fetch(`${config.API_ENDPOINT}/journals/${journalId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postJournal(content, mood) {
    console.log(content, mood)
    return fetch(`${config.API_ENDPOINT}/journals`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        content: content,
        mood: mood,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default JournalApiService
