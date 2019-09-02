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

class AuthScreen extends Component {
  state ={
    username: "",
    password: "",
  }

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      this.props.navigation.navigate("App");
    }
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  loginUser() {
    const { username, password } = this.state;
    if (!username) return;
    if (!password) return;
    this.props.loginUser(username, password);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>assemble</Text>
            <Image 
              source={require("../uwu.jpg")}
              style={styles.welcomeImage}
            />
            <Text>username</Text>
            <TextInput
              autoCapitalize="none"
              editable={!this.props.isLoading}
              name="username"
              onChangeText={(value) => this.handleChange('username', value)}
              style={styles.textInput}
              value={this.state.username}
            />
            <Text>password</Text>
            <TextInput
              autoCapitalize="none"
              editable={!this.props.isLoading}
              name="password"
              onChangeText={(value) => this.handleChange('password', value)}
              secureTextEntry={true}
              style={styles.textInput}
              value={this.state.password}
            />
            <TouchableOpacity
              onPress={() => this.loginUser()}
              style={styles.button}
            >
              {
                this.props.isLoading ?
                  <ActivityIndicator/>
                  : (
                      <Text>
                        login
                      </Text>
                    )
              }
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

AuthScreen.navigationOptions = {
  header: null,
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingTop: 30,
  },
  textInput: {
    borderColor: "lightgray",
    borderWidth: 2,
    borderRadius: 5,
    textAlign: "center",
    width: "80%",
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  welcomeText: {
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return {
    isLoggedIn: state.session.isLoggedIn,
    isLoading: state.session.isLoading,
    errorMessage: state.session.errorMessage
  }
}

export default connect(mapStateToProps, { loginUser })(AuthScreen);
