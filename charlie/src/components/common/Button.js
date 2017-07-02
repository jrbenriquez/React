import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const style = {
  buttonStyle: {
    backgroundColor: '#45cdFF',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 35,
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
};

const Button = ({ onPress, children}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.buttonStyle}>
      <Text style={style.textStyle}> {children}</Text>
    </TouchableOpacity>
  );
};

export { Button };

