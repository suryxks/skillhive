import axios from "axios";

export const getUserDataService = async (userId) => {
    const url = `${process.env.API_URL}/api/users/${userId}`;
    try {
        const response = await axios.get(url);
        return response.data; 
    } catch (error) {
        console.log(error)
    }
  
}