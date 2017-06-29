import React from 'react';
import { Text, Image, View, Button, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  titleStyle: {
    fontSize: 18,
    color: '#000',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  albumImage: {
    height: 300,
    flex: 1,
    width: null,
  },
  bottomContent: {
    flex: 1,
    alignSelf: 'stretch',
  },
};
const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const {
    thumbnailStyle,
    headerContent,
    thumbContainer,
    titleStyle,
    albumImage,
    bottomContent,
  } = styles;

  goToURL = () => {
    Linking.openURL(url);
  };
  return (
    <Card>
      <CardSection>
        <View style={thumbContainer}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContent}>
          <Text style={titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={albumImage} />
      </CardSection>

      <CardSection>
        <View style={bottomContent}>
          <Button
            title="Buy Now"
            color="#4545ed"
            onPress={this.goToURL}
          />
        </View>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
