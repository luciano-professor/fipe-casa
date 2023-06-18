import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import tw from 'twrnc';
import axios from 'axios';
import { SWRConfig } from 'swr';

//URL Base da API
axios.defaults.baseURL = 'https://parallelum.com.br/fipe/api/v1';
// https://deividfortuna.github.io/fipe/
//http://deividfortuna.github.io/fipe/v2/

const fetcher = (url) => axios.get(url).then((res) => res.data);

import StackNavigator from './src/StackNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <SWRConfig value={{ fetcher: fetcher }}>
        <View style={tw`flex-1 bg-indigo-950`}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </View>
        <StatusBar
          barStyle="light-content"
          backgroundColor={tw`text-indigo-950`.color}
        />
      </SWRConfig>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
