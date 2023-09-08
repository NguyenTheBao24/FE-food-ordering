// api.js
import axios from "axios";

export const sendReservationData = async (reservationData) => {
  try {
    const response = await axios.post(
      "https://charming-shirt-production.up.railway.app/api/employees/login",
      reservationData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
