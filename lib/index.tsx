import React from 'react';
import { Column } from 'react-native-simple-layout';
import { Text, ViewBase } from 'react-native';
import styles from './index.style';

interface ScaffoldProps extends ViewBase {
  children?;
  style?;
}

export default function Scaffold(props: ScaffoldProps) {
  return (
    <Column {...props} style={[styles.scaffold, props.style]}>
      {props.children}
    </Column>
  );
}
