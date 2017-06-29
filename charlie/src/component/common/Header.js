import React from 'react';
import { Text, View } from 'react-native';

const styles = {
  container: {
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
    color: '#000',
  },
};

const Header = (props) => {
  const { textStyle, container } = styles;
  return (
    <View style={container}>
      <Text style={textStyle}>{props.headerName}</Text>
    </View>
  );
};

Header.propTypes = {
  headerName: React.PropTypes.string.isRequired,
};

export { Header };
