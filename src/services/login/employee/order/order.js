import axios from "axios";



export const fetchCustomerDataOrder = async () => {
    try {
      const response = await axios.get('https://chanlepro.online/api/table');
  
      // console.log(response)
  
  
      return response.data.data;
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ API:', error);
      return [];
    }
  }

  export const putTableStatus = async (id) => {
    try {
      const response = await axios.put('https://chanlepro.online/api/table/updateTableStatus-'+id);
      
      console.log(response)
      return response.data.data;
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ API:', error);
      return [];
    }
  }
  
 