import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
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

const HomeScreen = (props) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const loginUser = () => {
    if (!username) return;
    if (!password) return;
    props.loginUser(username, password);
  };
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
            editable={!props.isLoading}
            name="username"
            onChangeText={(value) => setUsername(value)}
            style={styles.textInput}
            value={username}
          />
          <Text>password</Text>
          <TextInput
            autoCapitalize="none"
            editable={!props.isLoading}
            name="password"
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            style={styles.textInput}
            value={password}
          />
          <TouchableOpacity
            onPress={() => loginUser()}
            style={styles.button}
          >
            {
              props.isLoading ?
                <ActivityIndicator/>
                : (
                    <Text>
                      login
                    </Text>
                  )
            }
          </TouchableOpacity>
          {
            props.isLoggedIn ?
              (
                <Text>
                  You are logged in!
                </Text>
              )
            : (
                <Text>
                  {props.errorMessage}
                </Text>
              )
          }
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
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

export default connect(mapStateToProps, { loginUser })(HomeScreen);
