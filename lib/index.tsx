import React from 'react';
import { Column } from 'react-native-simple-layout';
import { Text, ViewBase } from 'react-native';
import styles from './index.style';

interface ScaffoldProps extends ViewBase {
  children?;
  style?;
}

interface Action {
  showModal(component);
  hideModel();
}

export default class Scaffold extends React.Component<ScaffoldProps, {}>
  implements Action {
  showModal(component: any) {
    throw new Error('Method not implemented.');
  }

  hideModel() {
    throw new Error('Method not implemented.');
  }

  render() {
    return (
      <Column {...this.props} style={[styles.scaffold, this.props.style]}>
        {this.props.children}
      </Column>
    );
  }
}
