import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation, useRoute } from '@react-navigation/native';

import BotaoItem from './BotaoItem';

const ModeloItem = ({ modelo }) => {
  const navigation = useNavigation();
  const { ...params } = useRoute().params;

  return (
    <BotaoItem
      onPress={() =>
        navigation.navigate('Anos', {
          modelo: modelo.code,
          modeloNome: modelo.name,
          ...params,
        })
      }
    >
      <Text style={tw`text-indigo-200 text-xl`}>{modelo.name}</Text>
    </BotaoItem>
  );
};

export default ModeloItem;
