import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import tw from 'twrnc';

import TituloPagina from '../components/TituloPagina';
import AnoItem from '../components/AnoItem';

const Anos = ({ route }) => {
  const { tipo, marca, modelo } = route.params;

  const [anos, setAnos] = useState([]);

  useEffect(() => {
    async function lerAnos() {
      const resposta = await axios.get(
        `https://parallelum.com.br/fipe/api/v1/${tipo}/marcas/${marca}/modelos/${modelo}/anos`,
      );
      setAnos(resposta.data);
    }
    lerAnos();
  }, []);

  return (
    <SafeAreaView>
      <TituloPagina>Anos</TituloPagina>

      <FlatList
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
      />
    </SafeAreaView>
  );
};

export default Anos;
