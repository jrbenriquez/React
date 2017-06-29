import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import AlbumDetail from './AlbumDetail'
/* Class Based Components:
      -used for dynamic sources of data
      -handles any data that might change
      -knows when to re-render
      -more code to write
      -based on ES6 classes

      - has *LIFECYCLE METHODS*
          -determines when to re-render the component
          -functions placed inside class that automatically
            gets called

            1. componentWillMount() - anytime component is to be
              rendered, this will execute
*/

const styles = {
  mainContent: {
    marginBottom: 20,
  },
};
class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail album={album} key={album.title} />
      );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={styles.mainContent}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

/* Functional Components = returns JSX
      -presenting static data
      -can't handle fetching data
      -easy to write

const AlbumList = () => {
  return (
    <View>
      <Text>Album List</Text>
    </View>
  );
};

*/


export default AlbumList;
