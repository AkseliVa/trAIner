const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

export const fetchMovements = async (
  setMovementData,
  name,
  bodypartValue,
  equipmentValue
) => {
  const nameParam = name ? `/name/${name.toLowerCase()}` : "";
  const bodyPartParam = bodypartValue
    ? `/bodyPart/${bodypartValue.toLowerCase()}`
    : "";
  const equipmentParam = equipmentValue
    ? `/equipment/${equipmentValue.toLowerCase()}`
    : "";

  let param = "";

  if (nameParam !== "") param = nameParam;
  else if (bodyPartParam !== "") param = bodyPartParam;
  else if (equipmentParam !== "") param = equipmentParam;

  const url = `https://exercisedb.p.rapidapi.com/exercises${param}?limit=10&offset=0`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": apiUrl,
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(url);
    console.log(result);
    console.log(bodypartValue);
    setMovementData(result);
  } catch (error) {
    console.error("Error fetching: ", error);
  }
};
