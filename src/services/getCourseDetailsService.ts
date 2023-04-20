import axios from "axios";

export const getCourseDetailsService = async(courseId,token) => {
    const url = `${process.env.API_URL}/api/courses/${courseId}`;
    
    try {
        const response = await axios.get(url, { headers: { authorization: token } });
        return response.data;
    } catch (e) {
        console.log(e)
    }
}