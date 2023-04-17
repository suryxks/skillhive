import axios from "axios";

export const loginService = async (userCredentials) => {
  const url = `${process.env.API_URL}/login`;
  try {
    const res = await axios.post(url, userCredentials);
    return res.data;
  } catch (error) {
    console.log(error)
  }
  

};

export const signupService = async (userCredentials) => {
  const url = `${process.env.API_URL}/signup`;
  try {
    const res = await axios.post(url, userCredentials);
  return res.data;
  } catch (error) {
    console.log(error)
  }
  
};
