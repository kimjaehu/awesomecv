import axios from 'axios'

export function login(data) {
  return dispatch => {
    return axios.post('api/v1/auth/login', { auth: data })
  }
}