import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import tw from 'twrnc';
import useSWR from 'swr';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import TituloPagina from '../components/TituloPagina';
import ValorItemContainer from '../components/ValorItemContainer';
import Loading from '../components/Loading';

const Valor = ({ route }) => {
  const { tipo, marca, modelo, ano } = route.params;

  const { data: valor, isLoading } = useSWR(
    `/${tipo}/brands/${marca}/models/${modelo}/years/${ano}`,
  );

  const { data: valorComHistorico, isLoading: isLoading2 } = useSWR(
    () => `/${tipo}/${valor.codeFipe}/years/${ano}/history`,
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
      <TituloPagina>Dados FIPE</TituloPagina>

      {/* {!valor && (
        <ActivityIndicator
          size={24}
          color={tw`text-indigo-100`.color}
          style={tw`mt-2`}
        />
      )} */}

      <ScrollView
        style={tw`bg-indigo-400 h-full rounded-t-[25px] mt-2 pt-4 px-4`}
      >
        {isLoading && <Loading />}

        {/* <View style={tw`flex-row justify-center items-center gap-4`}>
          <FontAwesome
            name="money"
            size={24}
            color={tw`text-indigo-950`.color}
          />
         
        </View> */}

        <Text style={tw`text-2xl text-center text-indigo-950 font-bold`}>
          {valor?.price}
        </Text>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Marca</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.brand}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Modelo</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.model}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Ano</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.modelYear}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Combustível</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.fuel}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Código FIPE</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.codeFipe}
          </Text>
        </ValorItemContainer>

        <ValorItemContainer>
          <Text style={tw`text-xl text-indigo-900`}>Mês de referência</Text>
          <Text style={tw`text-xl text-indigo-950 font-bold`}>
            {valor?.referenceMonth}
          </Text>
        </ValorItemContainer>

        <Text style={tw`text-lg text-indigo-900 text-center my-2`}>
          Variação do preço nos últimos 3 meses
        </Text>

        {valorComHistorico?.priceHistory?.map((item) => (
          <View key={item.reference} style={tw`flex-row items-center`}>
            <AntDesign
              name="calendar"
              size={20}
              style={tw`text-indigo-900 mr-2`}
            />
            <Text style={tw`text-lg text-indigo-950`}>{item.month}</Text>
            <Text style={tw`text-lg text-indigo-950`}> = {item.price}</Text>
          </View>
        ))}

        {/* <ActivityIndicator
          size={24}
          color={tw`text-red-500`.color}
          style={tw`mt-2`}
        /> */}

        {isLoading2 && <Loading />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Valor;
