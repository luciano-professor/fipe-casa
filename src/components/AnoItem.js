import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import tw from 'twrnc';

import BotaoItem from './BotaoItem';

const AnoItem = ({ ano }) => {
  const navigation = useNavigation();
  const { tipo, marca, modelo } = useRoute().params;

  return (
    <BotaoItem
      onPress={() =>
        navigation.navigate('Valor', { ano: ano.codigo, tipo, marca, modelo })
      }
    >
      <Text style={tw`text-indigo-200 text-xl`}>{ano.nome}</Text>
    </BotaoItem>
  );
};

export default AnoItem;
