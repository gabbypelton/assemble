import React, { useState } from "react";
import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { findServers, getOwnServers } from "../actions/servers";

const SearchBar = props => {
	const findServers = (value) => {
		if (value.length) {
			props.findServers(value);
		} else {
			props.getOwnServers();
		}
	}
	return (
		<TextInput
			onChangeText={(value) => findServers(value)}
			autoCapitalize="none"
		/>	
	)
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    marginTop: 10
  },
})

const mapStateToProps = state => {
	return {
		isLoading: state.servers.isLoading
	}
};

export default connect(mapStateToProps, { findServers, getOwnServers })(SearchBar);