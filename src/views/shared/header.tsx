import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Text, Drawer } from 'react-native-ui-kitten';

class Header extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <View>
          <Icon name='menu' style={styles.icon} />
        </View>
        <View>
          <Text category='h5'>
            Inkblot Mobile
          </Text>
        </View>
        <View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'normal'
  },
  icon: {
    color: '#999999',
    marginLeft: 8,
    marginRight: 8,
    width: 28, 
    height: 28,
  }
});

export default Header;
