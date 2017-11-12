import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import LoggedIn from './src/components/LoggedIn';

class App extends Component {
  state = { loggedIn: null, userEmail: '' };

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAZZRFhxWNRL_EoKXVJFbVY7euC6tC3SZs',
      authDomain: 'rnauth-8551c.firebaseapp.com',
      databaseURL: 'https://rnauth-8551c.firebaseio.com',
      projectId: 'rnauth-8551c',
      storageBucket: 'rnauth-8551c.appspot.com',
      messagingSenderId: '653330048215'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const userEmail = user.email;
        this.setState({ loggedIn: true, userEmail });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <LoggedIn email={this.state.userEmail} />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header headerTitle="React Native Firebase" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
