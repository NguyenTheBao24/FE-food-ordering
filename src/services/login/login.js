
import axios from "axios";

export const sendReservationData = async (reservationData) => {
    try {
        const response = await axios.post(
            "https://chanlepro.online/api/employees/login",
            reservationData
        );
        return response.data;
    } catch (error) {

        throw error

    }
};