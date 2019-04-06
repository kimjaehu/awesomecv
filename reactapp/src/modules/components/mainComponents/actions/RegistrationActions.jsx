import Axios from "axios";

export function userRegistrationRequest(userData) {
  return dispatch => {
    console.log('this is userdata',userData)
    return Axios.post('api/v1/users', {user: userData})
  }
}