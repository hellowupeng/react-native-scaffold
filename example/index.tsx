import React from 'react';
import { Text } from 'react-native';
import Scaffold from '../lib';
import styles from './index.style';

export default function Example() {
  return (
    <Scaffold style={styles.container}>
      <Text>Scaffold</Text>
    </Scaffold>
  );
}
