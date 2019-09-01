import axios from "axios";
import types from "./types";

export const loginUser = (username, password) => async dispatch => {
	dispatch({ type: types.LOGIN });
	const request = { username, password }
	try {
			const response = await axios.post("/users/login", request);
		if (!response) {
			dispatch({ type: types.LOGIN_FAIL });
			return;
		}
		dispatch({ type: types.LOGIN_SUCCESS, token: response.data.token })
	} catch(err) {
		dispatch({ type: types.LOGIN_FAIL, error: err.response.data })
	}
}

export const registerUser = (email, username, password) => async dispatch => {
	dispatch({ type: types.REGISTER });
	const request = { email, username, password }
	try {
			const response = await axios.post("/users/register", request);
		if (!response) {
			dispatch({ type: types.REGISTER_FAIL });
			return;
		}
		dispatch({ type: types.REGISTER_SUCCESS, token: response.data.token })
	} catch(err) {
		dispatch({ type: types.REGISTER_FAIL, error: err.response.data })
	}
}