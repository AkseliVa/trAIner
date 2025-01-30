import { useState } from "react";
import BodypartItem from "../states/bodyparts";
import EquipmentItem from "../states/equipments";

export default function useMovements() {
  const [movementData, setMovementData] = useState([]);
  const [name, setName] = useState("");

  const [openBodypart, setOpenBodypart] = useState(false);
  const [bodypartValue, setBodypartValue] = useState(null);
  const [bodypartItems, setBodypartItems] = BodypartItem();

  const [openEquipment, setOpenEquipment] = useState(false);
  const [equipmentValue, setEquipmentValue] = useState(null);
  const [equipmentItems, setEquipmentItems] = EquipmentItem();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovement, setSelectedMovement] = useState(null);

  return {
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
  };
}
