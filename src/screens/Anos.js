import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import tw from 'twrnc';
import useSWR from 'swr';

import TituloPagina from '../components/TituloPagina';
import AnoItem from '../components/AnoItem';
import DadosSelecionados from '../components/DadosSelecionados';

const Anos = ({ route }) => {
  const { tipo, marca, modelo } = route.params;

  const { data } = useSWR(`/${tipo}/marcas/${marca}/modelos/${modelo}/anos`);

  // const [anos, setAnos] = useState([]);

  // useEffect(() => {
  //   async function lerAnos() {
  //     const resposta = await axios.get(
  //       `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos/${modelo}/anos`,
  //     );
  //     setAnos(resposta.data);
  //   }
  //   lerAnos();
  // }, []);

  return (
    <SafeAreaView>
      <TituloPagina>Anos</TituloPagina>

      {/* <View style={tw`mb-4 mx-2 flex-row justify-center`}>
        <Text style={tw`text-slate-500`}>Carros</Text>
        <Text style={tw`text-slate-500`}> - Acura</Text>
        <Text style={tw`text-slate-500`}> - Legend 3.2/3.5 </Text>
      </View> */}

      <DadosSelecionados tipo="Carros" marca="Acura" modelo="Legend 3.2/3.5" />

      <FlatList
        data={data}
        renderItem={({ item }) => <AnoItem ano={item} />}
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
        data={anos}
        renderItem={({ item }) => <AnoItem ano={item} />}
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

export default Anos;
