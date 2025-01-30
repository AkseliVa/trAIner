import { View, Text, TouchableOpacity, Image } from "react-native";

export default function MovementModal({
  id,
  name,
  target,
  bodyPart,
  equipment,
  gifUrl,
  instructions,
  onClose,
}) {
  return (
    <View className="bg-white rounded-lg p-5 w-3/4">
      <Text className="text-lg font-bold">{name}</Text>
      <Image style={{ width: 250, height: 200 }} source={{ uri: gifUrl }} />
      <Text>Target: {target}</Text>
      <Text>Body Part: {bodyPart}</Text>
      <Text>Equipment: {equipment}</Text>
      <Text>Instructions: {instructions}</Text>
      <TouchableOpacity
        className="mt-5 p-2 bg-red-500 rounded-md"
        onPress={onClose}
      >
        <Text className="text-white text-center">Close</Text>
      </TouchableOpacity>
    </View>
  );
}
