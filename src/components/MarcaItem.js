import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import BotaoItem from './BotaoItem';

const MarcaItem = ({ marca }) => {
  const navigation = useNavigation();
  const { tipo } = useRoute().params;
  // const {tipo }

  // console.log(route.params);

  return (
    <BotaoItem
      onPress={() =>
        navigation.navigate('Modelos', { marca: marca.codigo, tipo })
      }
    >
      <Text style={tw`text-indigo-200 text-xl`}>{marca.nome}</Text>
    </BotaoItem>
  );
};

export default MarcaItem;
