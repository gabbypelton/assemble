import types from "../actions/types";

const INITIAL_STATE = {
  viewType: "mine",
  isLoading: false,
  foundServers: [],
  ownServers: [],
  errorMessage: ""
}

export default function session(state=INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_OWN_SERVERS:
      return {
        viewType: "mine",
        isLoading: true
      }
    case types.GET_OWN_SERVERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case types.GET_OWN_SERVERS_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message
      }
    case types.FIND_SERVERS:
      return {
        isLoading: true,
        viewType: "search"
      }
    case types.FIND_SERVERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        foundServers: action.servers
      }
    case types.FIND_SERVERS_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message
      }
    default:
      return state;
  }
}