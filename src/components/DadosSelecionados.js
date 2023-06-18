import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useRoute } from '@react-navigation/native';

const DadosSelecionados = () => {
  const { tipoNome, marcaNome, modeloNome } = useRoute().params;

  return (
    <View style={tw`mb-4 mx-2 flex-row justify-center`}>
      {tipoNome && <Text style={tw`text-slate-500`}>{tipoNome}</Text>}
      {marcaNome && <Text style={tw`text-slate-500`}> - {marcaNome}</Text>}
      {modeloNome && <Text style={tw`text-slate-500`}> - {modeloNome}</Text>}

      {/* <Text style={tw`text-slate-500`}> - Acura</Text>
      <Text style={tw`text-slate-500`}> - Legend 3.2/3.5 </Text> */}
    </View>
  );
};

export default DadosSelecionados;
