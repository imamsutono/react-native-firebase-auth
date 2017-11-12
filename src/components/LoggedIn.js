import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button } from './common';

const LoggedIn = ({ email }) => {
  const { container, buttonContainer, welcomeMessage } = styles;

  return (
    <View style={container}>
      <Text style={welcomeMessage}>Hai, {email}</Text>
      <View style={buttonContainer}>
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 24
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  welcomeMessage: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 16
  }
};

export default LoggedIn;
