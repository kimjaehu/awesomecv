import axios from 'axios'
import { Redirect } from 'react-router-dom'

export function login(data) {
  return dispatch => {
    return axios.post('api/v1/auth/login', { auth: data })
    }
  }
