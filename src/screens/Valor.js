import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import tw from 'twrnc';
import useSWR from 'swr';

import TituloPagina from '../components/TituloPagina';
import { ActivityIndicator } from 'react-native';
import ValorItemContainer from '../components/ValorItemContainer';

const Valor = ({ route }) => {
  const { tipo, marca, modelo, ano } = route.params;

  const { data: valor, isLoading } = useSWR(
    `/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`,
  );

  // const [valor, setValor] = useState(null);

  // useEffect(() => {
  //   async function lerValor() {
  //     const resposta = await axios.get(
  //       `/${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`,
  //     );

  //     setValor(resposta.data);
  //   }
  //   lerValor();
  // }, []);

  return (
    <SafeAreaView>
      <TituloPagina>Valor</TituloPagina>

      {isLoading && (
        <ActivityIndicator
          size={24}
          color={tw`text-indigo-100`.color}
          style={tw`mt-2`}
        />
      )}

      {/* {!valor && (
        <ActivityIndicator
          size={24}
          color={tw`text-indigo-100`.color}
          style={tw`mt-2`}
        />
      )} */}

      <View style={tw`bg-indigo-400 h-full rounded-t-[25px] mt-4 pt-4 px-4`}>
        <Text style={tw`text-2xl text-center text-indigo-950 font-bold`}>
          {valor?.Valor}
        </Text>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Marca</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.Marca}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Modelo</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.Modelo}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Ano</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.AnoModelo}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Combustível</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.Combustivel}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Código FIPE</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.CodigoFipe}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Mês de referência</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.MesReferencia}
          </Text>
        </ValorItemContainer>
      </View>
    </SafeAreaView>
  );
};

export default Valor;
