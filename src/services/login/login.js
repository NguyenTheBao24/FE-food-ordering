
import axios from "axios";

export const sendReservationData = async (reservationData) => {
    try {
        const response = await axios.post(
            "https://pttkpmn05project3-production.up.railway.app/api/employees/login",
            reservationData
        );
        return response.data;
    } catch (error) {

        throw error

    }
};