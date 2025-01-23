import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import kettlebell from "@/assets/images/kettlebell.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"
import { useRouter } from "expo-router";


export default function App() {
  const router = useRouter();

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
              <Text className="text-white text-center text-5xl font-bold pt-8">trAIner</Text>
              <Text className="text-white text-center text-3xl px-5">Make working out easier</Text>
            </View>
            <View className="justify-center">
              <TouchableOpacity className="pt-20 m-10" onPress={() => router.push("/newWorkout")}>
                <Text className="text-white text-center text-2xl font-bold">NEW</Text>
                <Text className="text-white text-center text-xl font-bold">Create a new workout</Text>
              </TouchableOpacity>
              <TouchableOpacity className="pt-10 m-10" onPress={() => router.push("/savedWorkouts")}>
                <Text className="text-white text-center text-2xl font-bold">SAVED</Text>
                <Text className="text-white text-center text-xl font-bold">See your saved workouts</Text>
              </TouchableOpacity>
              <TouchableOpacity className="pt-10 m-10" onPress={() => router.push("/searchMovements")}>
                <Text className="text-white text-center text-2xl font-bold">SEARCH</Text>
                <Text className="text-white text-center text-xl font-bold">Search for movements</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient> 
      </ImageBackground>      
    </View>
  );
}