import { Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import tw from 'twrnc';

import TituloPagina from '../components/TituloPagina';
import ModeloItem from '../components/ModeloItem';

const Modelos = ({ route }) => {
  const { marca, tipo } = route.params;

  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    async function lerModelos() {
      const resposta = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos`,
      );
      // console.log(
      //   `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos`,
      // );
      // console.log(route.params);
      // console.log(resposta.data);
      setModelos(resposta.data.modelos);
    }
    lerModelos();
  }, []);

  return (
    <SafeAreaView>
      <TituloPagina>Modelos</TituloPagina>

      <FlatList
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
      />
    </SafeAreaView>
  );
};

export default Modelos;
