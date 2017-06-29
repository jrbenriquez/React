import React from 'react';
import { View } from 'react-native';


const styles = {
  container: {
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};
const CardSection = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
};

export default CardSection;
