
import axios from "axios";

export const fetchCustomerData = async () => {
  try {
    const response = await axios.get('https://pttkpmn05project3-production.up.railway.app/api/booking?filterByStatus=Pending');

    // console.log(response)


    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu từ API:', error);
    return [];
  }
};

export const fetchCustomerDataOrder = async () => {
  try {
    const response = await axios.get('https://pttkpmn05project3-production.up.railway.app/api/table?filterByStatus=Available');

    // console.log(response)


    return response.data.data;
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu từ API:', error);
    return [];
  }
}

export const putCustomer = async (reservationData,id) => {
  try {
      const response = await axios.put(
          "https://pttkpmn05project3-production.up.railway.app/api/booking/reservationId-"+id,
          reservationData
      );

      console.log(response.data)
      return response.data;
  } catch (error) {

      throw error

  }
};
export const putCustomerdelete = async ( reservationData,id) => {
  try {
      const response = await axios.put(
          "https://pttkpmn05project3-production.up.railway.app/api/booking/reservationId-"+id+"?delete=true",
          reservationData
      );

 
      return response.data;
  } catch (error) {

      throw error

  }
};

