import axios from "axios";
const checkAPI = async () => {
  try {
    const apiKey = "245b1741097b8e94dc5491434cd9d7d4";
    const city = "London"; // Replace with the desired location
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await axios.get(apiUrl);

    console.log(response.data); // Output the API response
  } catch (error) {
    console.error("Error:", error.message);
  }
};

checkAPI();
