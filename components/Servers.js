import React, { Component } from "react";
import {
	ActivityIndicator,
	Text,
	View
} from "react-native";
import moment from "moment";
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
						return <Server server={server} key={server._id} />
					})
				}
				</View>
			)
		} else if (foundServers && foundServers.length && viewType === "search") {
			return (
				<View>
				{
					foundServers.map(server => {
						return <Server server={server} key={server._id} />
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

const Server = props => {
	return (
	<View
		key={props.server._id}
	>
		<Text>
			{props.server.name}
		</Text>
		<Text>
			{props.server.description}
		</Text>
		<Text>
			created on {moment(props.server.createdOn).format()}
		</Text>
	</View>
)
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