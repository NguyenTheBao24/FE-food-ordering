
import axios from "axios";

export const sendReservationData = async (reservationData) => {
    try {
        const response = await axios.post(
            "https://charming-shirt-production.up.railway.app/api/employees/login",
            reservationData
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            // Có phản hồi từ máy chủ nhưng có lỗi (có thể là lỗi xác thực)
            throw error.response.data; // Trả về dữ liệu lỗi từ máy chủ
        } else if (error.request) {
            // Không có phản hồi từ máy chủ (có thể do lỗi mạng)
            throw "Không có kết nối tới máy chủ";
        } else {
            // Lỗi không xác định
            throw "Lỗi không xác định";
        }
    }
};