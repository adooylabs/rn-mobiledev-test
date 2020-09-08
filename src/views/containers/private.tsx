import React, { Component, ReactNode } from 'react';
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native';
import { Route, Switch } from 'react-router-native';

import { Header } from '../shared';

class Private extends Component {
  public render(): ReactNode {
    return (
      <View>
        <Header />

        <Text style={style.greeting}>
          Hello, (show first_name) !
        </Text>

        <View style={styles.box}>
          <Text>Name: (show user fullname)</Text>
          <Text>Email: (show user email)</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greeting: {
    fontSize: 35,
    marginLeft: 20,
    marginBottom: 40,
    fontWeight: '600'
  },
  box: {
    margin: 20,
    padding: 20,
    backgroundColor: '#EFEFEF',
  }
})
export default Private;
