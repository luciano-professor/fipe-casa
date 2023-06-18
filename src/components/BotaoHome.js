import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const BotaoHome = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={tw`p-2 bg-indigo-300 items-center rounded-lg`}
    >
      {children}
    </TouchableOpacity>
  );
};

export default BotaoHome;
