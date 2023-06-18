import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';

const BotaoItem = ({ children, onPress }) => {
  return (
    <View style={tw`mx-2 py-6 border-t border-indigo-900`}>
      <TouchableOpacity style={tw`flex-row justify-between`} onPress={onPress}>
        {children}
        <Entypo
          name="chevron-right"
          size={24}
          color={tw`text-indigo-800`.color}
        />
      </TouchableOpacity>
    </View>
  );
};

export default BotaoItem;

const styles = StyleSheet.create({});
