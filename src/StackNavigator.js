import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import tw from 'twrnc';
import Marcas from './screens/Marcas';
import Modelos from './screens/Modelos';
import Anos from './screens/Anos';
import Valor from './screens/Valor';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: tw`flex-1 bg-indigo-950`,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Marcas" component={Marcas} />
      <Stack.Screen name="Modelos" component={Modelos} />
      <Stack.Screen name="Anos" component={Anos} />
      <Stack.Screen name="Valor" component={Valor} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
