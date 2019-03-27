import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Scaffold from '../lib';

export default function Example() {
  return (
    <Scaffold style={styles.container}>
      <Text>Scaffold</Text>
    </Scaffold>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
