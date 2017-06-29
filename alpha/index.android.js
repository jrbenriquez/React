// Alpha


// Import library to create component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerName={'Alpha Albums'} />
      <AlbumList />
    </View>
  );
};

// Render to Device
AppRegistry.registerComponent('alpha', () => App);
