import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const LoginScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-2xl font-bold`}>Login Screen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;