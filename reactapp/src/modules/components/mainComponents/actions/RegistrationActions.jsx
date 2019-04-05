import Axios from "axios";

export function userRegistrationRequest(userData) {
  return dispatch => {
    return Axios.post('api/v1/users', userData)
  }
}