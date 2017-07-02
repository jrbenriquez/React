import React from 'react';
import { View } from 'react-native';

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export { Card };
