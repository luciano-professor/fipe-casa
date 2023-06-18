import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TituloPagina = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View
    // style={tw`flex-row h-14 justify-center items-center border border-red-500`}
    >
      <TouchableOpacity
        style={tw`absolute ml-1 mt-2 z-50`}
        onPress={() => navigation.goBack()}
      >
        <Entypo
          name="chevron-left"
          size={24}
          color={tw`text-indigo-900`.color}
        />
      </TouchableOpacity>

      <Text style={tw`text-2xl text-indigo-100 font-bold text-center h-14`}>
        {children}
      </Text>
    </View>
  );
};

export default TituloPagina;
