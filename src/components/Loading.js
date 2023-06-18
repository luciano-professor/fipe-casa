import { View, Text, ActivityIndicator } from 'react-native';
import tw from 'twrnc';

const Loading = () => {
  return (
    <ActivityIndicator
      size={24}
      color={tw`text-indigo-100`.color}
      style={tw`mt-2`}
    />
  );
};

export default Loading;
