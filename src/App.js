import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDpoDzuDJvX47gRpYOL-7WlDjXs-pN60Wc',
      authDomain: 'authrn-1b15c.firebaseapp.com',
      databaseURL: 'https://authrn-1b15c.firebaseio.com',
      storageBucket: 'authrn-1b15c.appspot.com',
      messagingSenderId: '588287363876'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
