import { useState } from "react";

const BodypartItem = () => {
    const [bodypartItems, setBodypartItems] = useState([
        { label: "None", value: ""},
        { label: "Back", value: "back" },
        { label: "Cardio", value: "cardio" },
        { label: "Chest", value: "chest" },
        { label: "Lower Arms", value: "lower arms" },
        { label: "Lower Legs", value: "lower legs" },
        { label: "Neck", value: "neck" },
        { label: "Shoulders", value: "shoulders" },
        { label: "Upper arms", value: "upper arms" },
        { label: "Upper Legs", value: "upper legs" },
        { label: "Waist", value: "waist" },
    ]);
    return [bodypartItems, setBodypartItems];
};

export default BodypartItem;