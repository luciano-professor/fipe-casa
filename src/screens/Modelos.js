import { Text, FlatList, ActivityIndicator, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import tw from 'twrnc';
import useSWR from 'swr';

import TituloPagina from '../components/TituloPagina';
import ModeloItem from '../components/ModeloItem';
import DadosSelecionados from '../components/DadosSelecionados';

const Modelos = ({ route }) => {
  const { marca, tipo } = route.params;

  const { data } = useSWR(`/${tipo}/marcas/${marca}/modelos`);

  // if (!isLoading) {
  //   console.log(modelos);
  // }

  // const [modelos, setModelos] = useState([]);

  // useEffect(() => {
  //   async function lerModelos() {
  //     const resposta = await axios.get(`/${tipo}/marcas/${marca}/modelos`);
  //     setModelos(resposta.data.modelos);
  //   }
  //   lerModelos();
  // }, []);

  return (
    <SafeAreaView>
      <TituloPagina>Modelos</TituloPagina>

      <DadosSelecionados />

      <FlatList
        data={data?.modelos}
        renderItem={({ item }) => <ModeloItem modelo={item} />}
        keyExtractor={(item) => item.codigo}
        ListEmptyComponent={
          <ActivityIndicator
            size={24}
            color={tw`text-indigo-100`.color}
            style={tw`mt-2`}
          />
        }
      />

      {/* <FlatList
        data={modelos}
        renderItem={({ item }) => <ModeloItem modelo={item} />}
        keyExtractor={(item) => item.codigo}
        ListEmptyComponent={
          <ActivityIndicator
            size={24}
            color={tw`text-indigo-100`.color}
            style={tw`mt-2`}
          />
        }
      /> */}
    </SafeAreaView>
  );
};

export default Modelos;
