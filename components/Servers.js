import React, { Component } from "react";
import {
	ActivityIndicator,
	Text,
	View
} from "react-native";
import { connect } from "react-redux";
import { getOwnServers } from "../actions/servers";

class Servers extends Component {
	componentDidMount() {
		this.props.getOwnServers();
	}

	render() {
		const { ownServers, foundServers, isLoading, viewType } = this.props;
		if (isLoading) {
			return (
				<View>
					<ActivityIndicator/>
				</View>
			)
		} else if (ownServers && ownServers.length && viewType === "mine") {
			return (
				<View>
				{
					ownServers.map(server => {
						return (
							<View
								id={server._id}
							>
								<Text>
									{server.name}
								</Text>
							</View>
						)
					})
				}
				</View>
			)
		} else if (foundServers && foundServers.length && viewType === "search") {
			return (
				<View>
				{
					foundServers.map(server => {
						return (
							<View
								id={server._id}
							>
								<Text>
									{server.name}
								</Text>
							</View>
						)
					})
				}
				</View>
			)
		} else {
			return (
				<View>
					<Text>
						No servers found!
					</Text>
				</View>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		viewType: state.servers.viewType,
		ownServers: state.servers.ownServers,
		foundServers: state.servers.foundServers,
		isLoading: state.servers.isLoading
	}
}

export default connect(mapStateToProps, { getOwnServers })(Servers);