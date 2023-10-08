// api.js
import axios from "axios";

export const sendAccount = async (reservationData) => {
    try {
        const response = await axios.post(
            "https://chanlepro.online/api/login/doLogin",
            reservationData
        );
        return response;
    } catch (error) {

        throw error;
    }
};
export const sendEmpoylee = async (reservationData) => {
    try {
        const response = await axios.post(
            "https://chanlepro.online/api/employees/register",
            reservationData
        );
        console.log(response)
        return response;
    } catch (error) {

        throw error;
    }
};

export const getEnpoyleee = async () => {
    try {
        const response = await axios.get(
            "https://chanlepro.online/api/employees"
        );
        console.log(response.data)
        return response.data.data;


    } catch (error) {
        throw error

    }

}
export const getCaptra = async () => {
    try {
        const response = await axios.get(
            "https://chanlepro.online/api/login/getCaptcha"
        );
        // console.log(response.data.data.imageString)
        return response.data.data.imageString;


    } catch (error) {
        throw error

    }
}