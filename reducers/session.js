import types from "../actions/types";

const INITIAL_STATE = {
  profile: {},
  isLoggedIn: false,
  isLoading: false,
  token: null,
  errorMessage: ""
}

export default function session(state=INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        isLoading: true
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        token: action.token
      }
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        errorMessage: action.error.message
      }
    default:
      return state;
  }
}