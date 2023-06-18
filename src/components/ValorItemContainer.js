import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

const ValorItemContainer = ({ children }) => {
  return (
    <View style={tw`mb-2 border-b border-indigo-600 pb-4`}>{children}</View>
  );
};

export default ValorItemContainer;
