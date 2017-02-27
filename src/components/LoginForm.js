import React, { Component } from 'react';
// import { TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '' };


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
          <Input />
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
