import React from "react";
import { ImageBackground, Text, View } from "react-native";
import kettlebell from "@/assets/images/kettlebell.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"


export default function App() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={kettlebell}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
        >
          <SafeAreaView>
            <View>
              <Text className="text-white text-center text-4xl font-bold">trAIner</Text>
              <Text className="text-white text-center text-3xl px-5">Make working out easier</Text>
            </View>
          </SafeAreaView>
        </LinearGradient> 
      </ImageBackground>      
    </View>
  );
}