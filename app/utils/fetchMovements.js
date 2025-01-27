// fetchMovements.js
export const fetchMovements = async (apiUrl, apiKey, setMovementData) => {
    const url = "https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0";
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiUrl
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setMovementData(result);
    } catch (error) {
        console.error("Error fetching: ", error);
    }
};
