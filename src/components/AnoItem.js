import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import tw from 'twrnc';

import BotaoItem from './BotaoItem';

const AnoItem = ({ ano }) => {
  const navigation = useNavigation();
  const { ...params } = useRoute().params;

  return (
    <BotaoItem
      onPress={() => navigation.navigate('Valor', { ano: ano.code, ...params })}
    >
      <Text style={tw`text-indigo-200 text-xl`}>{ano.name}</Text>
    </BotaoItem>
  );
};

export default AnoItem;
