import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import BotaoHome from '../components/BotaoHome';
// import tw from '../lib/tailwind';
// import { useTheme } from '@react-navigation/native';

const Home = ({ navigation }) => {
  // const { colors } = useTheme();

  // const tema = {
  //   color: '#2CAAA0',
  // };

  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      <View style={tw`gap-4 items-center w-full`}>
        <Text style={tw`text-3xl text-indigo-100 font-bold`}>
          App Tabela FIPE
        </Text>

        <View style={tw`flex-row w-full justify-around`}>
          <TouchableOpacity
            style={tw`p-2 bg-indigo-300 rounded-lg items-center`}
            onPress={() =>
              navigation.navigate('Marcas', {
                tipo: 'cars',
                tipoNome: 'Carros',
              })
            }
          >
            <FontAwesome5 name="car" size={24} />
            <Text style={tw`text-xl font-bold`}>Carros</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`p-2 bg-indigo-300 items-center  rounded-lg`}
            onPress={() =>
              navigation.navigate('Marcas', {
                tipo: 'motorcycles',
                tipoNome: 'Motos',
              })
            }
          >
            <FontAwesome5 name="motorcycle" size={24} />
            <Text style={tw`text-xl font-bold`}>Motos</Text>
          </TouchableOpacity>
          <BotaoHome
            onPress={() =>
              navigation.navigate('Marcas', {
                tipo: 'trucks',
                tipoNome: 'Caminhões',
              })
            }
          >
            <FontAwesome5 name="truck" size={24} />
            <Text style={tw`text-xl font-bold`}>Caminhões</Text>
          </BotaoHome>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
