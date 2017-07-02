import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const style = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const Spinner = ({ size }) => {
  return (
    <View style={style.spinnerStyle} >
      <ActivityIndicator size={size || 'large'}/>
    </View>
  );
};

export { Spinner };
