import React, { Component } from 'react';
import { Text, View } from 'react-native';

type Props = {};
export default class AlbumList extends Component<Props> {
  componentWillMount() {
    console.log('Component will mount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List!!</Text>
      </View>
    );
  };
}
