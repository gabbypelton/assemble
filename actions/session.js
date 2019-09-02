import axios from "axios";
import { AsyncStorage } from "react-native";
import types from "./types";

export const loginUser = (username, password) => async dispatch => {
	dispatch({ type: types.LOGIN });
	const request = { username, password }
	try {
		const response = await axios.post("/users/login", request);
		if (!response || !response.data || !response.data.token) {
			dispatch({ type: types.LOGIN_FAIL, errorMessage: "Something is very wrong." });
			return;
		}
		const { token } = response.data;
		AsyncStorage.setItem("authToken", token);
		dispatch({ type: types.LOGIN_SUCCESS, token })
	} catch(err) {
		let errorMessage;
		if (err.response && err.response.data) {
			errorMessage = err.response.data;
		} else {
			errorMessage = "We trying.";
		}
		dispatch({ type: types.LOGIN_FAIL, errorMessage});
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
		const { token } = response.data
		AsyncStorage.setItem("authToken", token);
		dispatch({ type: types.REGISTER_SUCCESS, token })
		} catch(err) {
			let errorMessage;
			if (err.response && err.response.data) {
				errorMessage = err.response.data;
			} else {
				errorMessage = "We trying.";
			}
			dispatch({ type: types.REGISTER_FAIL, errorMessage});
	}
}