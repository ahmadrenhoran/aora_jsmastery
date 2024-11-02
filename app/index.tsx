import { Text, View } from "react-native";
import { Link } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import '../global.css'


export default function RootLayout() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-3xl">Aora!</Text>
      <StatusBar style="auto"/>
      <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
    </View>
  );
}
