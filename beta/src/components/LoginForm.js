import React, { Component } from 'react';
import { TextInput, Text, View} from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner} from './common';

const style = {
  errorStyle: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 18,
  }
};

class LoginForm extends Component {
  state = {
    email: '',
    pass: '',
    loginError: '',
    loading: false,
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size='small' />
    }

    return (
      <Button 
        onPress={this.onButtonPress} 
      >
        Login / Signup
      </Button>
    );
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      pass: '',
      loginError: '',
      loading: true,
    })
  }
  onLoginFail = () => {
    this.setState({ 
      loginError: 'Authentication Failed',
      loading: false,
     })
  }
  onButtonPress = () => {
    const { email, pass } = this.state;

    this.setState({loginError: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email,pass)
      .then(this.onLoginSuccess)
      .catch((err) => {
        firebase.auth().createUserWithEmailAndPassword(email,pass)
        .then(this.onLoginSuccess)
        .catch(this.onLoginFail);
      });
  }
  render() {
    const { bottomContent, errorStyle} = style;
    return (
      <Card>
        <CardSection>
          <Input 
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label='Email'
            placeholder="john.doe@gmail.com"
          />
        </CardSection>
        
        <CardSection>
          <Input 
            value={this.state.pass}
            onChangeText={pass => this.setState({ pass })}
            label='Password'
            placeholder="********"
            secureTextEntry
          />
        </CardSection>
        <Text style={errorStyle}>
          {this.state.loginError}
        </Text>
        <CardSection>
          <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            {this.renderButton()}
          </View>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

