import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import tw from 'twrnc';
import useSWR from 'swr';

import MarcaItem from '../components/MarcaItem';
import TituloPagina from '../components/TituloPagina';
import DadosSelecionados from '../components/DadosSelecionados';

const Marcas = ({ route }) => {
  // const [marcas, setMarcas] = useState([]);

  const { tipo } = route.params;

  const { data } = useSWR(`/${tipo}/brands`);

  // useEffect(() => {
  //   async function lerMarcas() {
  //     const resposta = await axios.get(`/${tipo}/marcas`);
  //     setMarcas(resposta.data);
  //   }
  //   lerMarcas();
  // }, [tipo]);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <TituloPagina>Marcas</TituloPagina>

      <DadosSelecionados />

      {/* <FlatList
        data={marcas}
        renderItem={({ item }) => <MarcaItem marca={item} />}
        keyExtractor={(item) => item.codigo}
        ListEmptyComponent={
          <ActivityIndicator
            size={24}
            color={tw`text-indigo-100`.color}
            style={tw`mt-2`}
          />
        }
      /> */}

      <FlatList
        data={data}
        renderItem={({ item }) => <MarcaItem marca={item} />}
        keyExtractor={(item) => item.code}
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

export default Marcas;
