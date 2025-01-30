import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  ImageBackground,
} from "react-native";
import { useState } from "react";

import kettlebell from "@/assets/images/kettlebell.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

import useMovements from "../utils/useMovements";
import { fetchMovements } from "../utils/fetchMovements";

import CustomDropDownPicker from "../components/customDropDownPicker";
import RenderSearchPageItem from "../components/renderSearchPageItem";
import AddMovementModal from "../components/addMovementModal";
import ShowWorkoutModal from "../components/showWorkoutModal";

export default function NewWorkoutPage() {
  const {
    movementData,
    setMovementData,
    name,
    setName,
    openBodypart,
    setOpenBodypart,
    bodypartValue,
    setBodypartValue,
    bodypartItems,
    setBodypartItems,
    openEquipment,
    setOpenEquipment,
    equipmentValue,
    setEquipmentValue,
    equipmentItems,
    setEquipmentItems,
    modalVisible,
    setModalVisible,
    selectedMovement,
    setSelectedMovement,
  } = useMovements();

  const [added, setAdded] = useState([]);
  const [workoutModalVisible, setWorkoutModalVisible] = useState(false);
  const [movementModalVisible, setMovementModalVisible] = useState(false);

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
            {/*Header*/}
            <Text className="text-white text-center text-5xl font-bold">
              Create a new workout
            </Text>
            <Text className="text-white text-center text-2xl font-bold">
              Start by choosing the movements you want
            </Text>

            {/* AddMovementModal */}
            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setModalVisible(false)}
            >
              <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                {selectedMovement && (
                  <AddMovementModal
                    item={selectedMovement}
                    setAdded={setAdded}
                    onClose={() => setModalVisible(false)}
                  />
                )}
              </View>
            </Modal>

            {/* ShowWorkoutModal */}
            <Modal
              visible={workoutModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setWorkoutModalVisible(false)}
            >
              <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                <ShowWorkoutModal
                  added={added}
                  onClose={() => setWorkoutModalVisible(false)}
                />
              </View>
            </Modal>
            {/*Search by name*/}
            <View className="items-center content-center w-90">
              {!bodypartValue && !equipmentValue && (
                <TextInput
                  className="border-2 border-solid border-black rounded-md mt-5 mb-2 p-3 bg-white text-black w-40"
                  placeholder="Name"
                  placeholderTextColor="black"
                  value={name}
                  onChangeText={setName}
                />
              )}
              {/*Search by bodypart*/}
              {!name && !equipmentValue && (
                <CustomDropDownPicker
                  open={openBodypart}
                  value={bodypartValue}
                  items={bodypartItems}
                  setOpen={setOpenBodypart}
                  setValue={setBodypartValue}
                  setItems={setBodypartItems}
                  placeholder="Select bodypart"
                  zIndex={3000}
                  zIndexInverse={1000}
                />
              )}
              {/*Search by equipment*/}
              {!name && (bodypartValue === "" || !bodypartValue) && (
                <CustomDropDownPicker
                  open={openEquipment}
                  value={equipmentValue}
                  items={equipmentItems}
                  setOpen={setOpenEquipment}
                  setValue={setEquipmentValue}
                  setItems={setEquipmentItems}
                  placeholder="Select equipment"
                  zIndex={2000}
                  zIndexInverse={2000}
                />
              )}

              {/*Search and Add buttons*/}
              <View className="flex-row">
                <TouchableOpacity
                  className="border-2 border-solid border-black rounded-md m-5 p-3 bg-green-500 text-black w-40 items-center"
                  onPress={() =>
                    fetchMovements(
                      setMovementData,
                      name,
                      bodypartValue,
                      equipmentValue
                    )
                  }
                >
                  <Text className="text-lg font-bold">Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="border-2 border-solid border-black rounded-md m-5 p-3 bg-white text-black w-40 items-center"
                  onPress={() => setWorkoutModalVisible(true)}
                >
                  <Text className="text-lg font-bold">Show workout</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*Render movements*/}
            <FlatList
              data={movementData}
              renderItem={({ item }) => (
                <RenderSearchPageItem
                  item={item}
                  setSelectedMovement={setSelectedMovement}
                  setModalVisible={setModalVisible}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
