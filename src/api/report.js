import apiUrl from '../apiConfig'
import axios from 'axios'

export const scrapeUrl = (url, user) => {
  return axios({
    url: apiUrl + '/reports',
    method: 'POST',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      url
    }
  })
}

export const index = user => {
  return axios({
    url: apiUrl + '/reports',
    method: 'GET',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
