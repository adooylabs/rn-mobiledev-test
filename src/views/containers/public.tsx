import React, { Component, ReactNode } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Route } from 'react-router-native';
import { Layout } from 'react-native-ui-kitten';
import { View, StyleSheet } from 'react-native';
// Components
import { Login } from '../auth';

class Public extends Component {
  public render(): ReactNode {
    return (
      <Layout style={styles.container}>
        <Route path="/" component={Login} />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  }
});

export default Public;
