// import libraries for making a Component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
  render() {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#f43f5f',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  textStyle: {
    fontSize: 30,
    color: '#ffffff'
  }
};
