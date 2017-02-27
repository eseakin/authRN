import React, { Component } from 'react';
// import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };


  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
          />
        </CardSection>
        
        <CardSection>
          <Input 
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password"
            secureTextEntry
          />
        </CardSection>
        
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;
