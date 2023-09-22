// api.js
import axios from "axios";

export const sendAccount = async (reservationData) => {
    try {
        const response = await axios.post(
            "https://pttkpmn05project3-production.up.railway.app/api/payment/doLogin",
            reservationData
        );
        return response;
    } catch (error) {

        throw error;
    }
};

export const getCaptra = async () => {
    try {
        const response = await axios.get(
            "https://pttkpmn05project3-production.up.railway.app/api/payment/getCaptcha"
        );
        // console.log(response.data.data.imageString)
        return response.data.data.imageString;


    } catch (error) {
        throw error

    }
}