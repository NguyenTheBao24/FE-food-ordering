
import axios from "axios";

export const fetchCustomerData = async () => {
    try {
        const response = await axios.get('https://pttkpmn05project3-production.up.railway.app/api/booking?filterByStatus=Pending');
    
        console.log(response)
    
    
        return response.data.data;
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu từ API:', error);
        return [];
      }
};