import axios from "axios";
import { AsyncStorage } from "react-native";
import types from "./types";

export const getOwnServers = () => async dispatch => {
	dispatch({ type: types.GET_OWN_SERVERS });
	try {
		const token = await AsyncStorage.getItem("authToken");
		const request = { token };
		const response = await axios.post("/servers/mine", request);
		if (!response) {
			dispatch({ type: types.GET_OWN_SERVERS_FAIL });
			return;
		}
		dispatch({ type: types.GET_OWN_SERVERS_SUCCESS, servers: response.data.servers })
	} catch(err) {
		dispatch({ type: types.GET_OWN_SERVERS_FAIL, error: err.response.data })
	}
};

export const findServers = (query) => async dispatch => {
	dispatch({ type: types.FIND_SERVERS });
	try {
		const token = await AsyncStorage.getItem("authToken");
		const request = { token, query, queryType: "name" };
		const response = await axios.post("/servers/search", request);
		if (!response) {
			dispatch({ type: types.FIND_SERVERS_FAIL });
			return;
		}
		dispatch({ type: types.FIND_SERVERS_SUCCESS, servers: response.data.servers })
	} catch(err) {
		dispatch({ type: types.FIND_SERVERS_FAIL, error: err.response.data })
	}
}