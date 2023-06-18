import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-native';
import tw from 'twrnc';

import MarcaItem from '../components/MarcaItem';
import TituloPagina from '../components/TituloPagina';

const Marcas = ({ route }) => {
  const [marcas, setMarcas] = useState([]);

  const { tipo } = route.params;

  // Alert.alert('', tipo);

  useEffect(() => {
    async function lerMarcas() {
      const resposta = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas`,
      );
      // console.log(resposta.data);
      setMarcas(resposta.data);
    }
    lerMarcas();
  }, [tipo]);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <TituloPagina>Marcas</TituloPagina>

      <FlatList
        data={marcas}
        renderItem={({ item }) => <MarcaItem marca={item} />}
        keyExtractor={(item) => item.codigo}
        // ItemSeparatorComponent={() => (
        //   <View style={tw`h-[1px] mx-2 bg-indigo-900`} />
        // )}
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
