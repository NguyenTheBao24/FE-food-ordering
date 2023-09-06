// api.js
import axios from "axios";

export const sendReservationData = async (reservationData) => {
  try {
    const response = await axios.post(
      "https://chanlepro.online/api/booking/add",
      reservationData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
