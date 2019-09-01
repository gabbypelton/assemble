import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { MonoText } from "../components/StyledText";
import { loginUser } from "../actions/session";

class HomeScreen extends Component {
  handleChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>home home home home</Text>
        <Channels />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Profile',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps, { })(HomeScreen);
