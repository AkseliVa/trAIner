import { View, FlatList, TouchableOpacity, Text, Modal } from "react-native";
import MovementModal from "./movementModal";
import { useState } from "react";

export default function ShowWorkoutModal({ added, onClose }) {
  const [selectedMovement, setSelectedMovement] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="bg-white rounded-lg p-5 w-3/4">
      <Text className="text-lg font-bold text-center mb-4">Your Workout</Text>

      {/* List of added movements */}
      <FlatList
        data={added}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="p-3 bg-gray-200 rounded-md m-2 w-full items-center"
            onPress={() => {
              setSelectedMovement(item);
              setModalVisible(true);
            }}
          >
            <Text className="text-lg font-bold">{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Close button */}
      <TouchableOpacity
        className="mt-5 p-2 bg-red-500 rounded-md"
        onPress={onClose}
      >
        <Text className="text-white text-center">Close</Text>
      </TouchableOpacity>

      {/* Movement Modal inside Workout Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          {selectedMovement && (
            <MovementModal
              id={selectedMovement.id}
              name={selectedMovement.name}
              target={selectedMovement.target}
              bodyPart={selectedMovement.bodyPart}
              equipment={selectedMovement.equipment}
              gifUrl={selectedMovement.gifUrl}
              instructions={selectedMovement.instructions}
              onClose={() => setModalVisible(false)}
            />
          )}
        </View>
      </Modal>
    </View>
  );
}
