import React from 'react';
import { TextInput, View, Text } from 'react-native';

const style = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 23,
    flex: 2,
  },
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    alignItems: 'center',
  },
};

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
  const { inputStyle, container, labelStyle } = style;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export { Input };
