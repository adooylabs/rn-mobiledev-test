import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { Private, Public } from './index';

interface Props {
  user: string
}

class Main extends PureComponent<Props> {
  // TODO: add a condition to show <Private /> if user
  // has successfully logged in.
  public render() {
    return (
      <View>
        <Public />
      </View>
    );
  }
}

export default Main;
