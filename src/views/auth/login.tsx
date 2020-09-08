import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-ui-kitten';

import { IProps, ILogin} from '../../interfaces/user';
import { USER_LOGIN } from '../../constants/action.types';

class Login extends Component<IProps, ILogin> {
  public static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  public state = {
    email: '',
    password: ''
  };

  public render(): ReactNode {
    return (
      <View>
        <Input
          label="Email"
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={ email => this.setState({ email })}
        />

        <Input
          label="Password"
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="password"
          onChangeText={ password => this.setState({ password })}
        />

        <Button
          style={{marginTop: 40}}
          appearance="outline"
          onPress={this.handleLogin}
        >
          Login
        </Button>
      </View>
    );
  }

  private handleLogin = () => {
    // TODO: handle login here
  };

}

export default connect(
  null,
  null
)(Login);
