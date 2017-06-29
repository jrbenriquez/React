import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Card, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

const style = {
  testStyle: {
    backgroundColor: 'red',
  },
};

class App extends Component {
  state = {
    loggedIn: null,
  }


  renderHome = ()  => {
    switch(this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return ( 
        <View style={{ paddingTop: 225}}>
          <Spinner />
          
        </View>
        );
    }
  };
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyAFV9j4_shhOA3RTN3ADQxDgwxNWOpqEGM',
    authDomain: 'authentication-aaf00.firebaseapp.com',
    databaseURL: 'https://authentication-aaf00.firebaseio.com',
    projectId: 'authentication-aaf00',
    storageBucket: 'authentication-aaf00.appspot.com',
    messagingSenderId: '748199477591',
  });
 
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false});
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerName="Beta Auth" />
        {this.renderHome()}
      </View>
    );
  }
}

export default App;

