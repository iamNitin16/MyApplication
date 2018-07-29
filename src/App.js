/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}
