// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums App'} />
    <AlbumList />
  </View>
  );

// Render on Device
AppRegistry.registerComponent('albums', () => App);
