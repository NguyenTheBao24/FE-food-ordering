import axios from "axios";



export const fetchCustomerDataOrder = async () => {
    try {
      const response = await axios.get('https://chanlepro.online/api/table');
  
      console.log(response.data.data)
  
  
      return response.data.data;
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ API:', error);
      return [];
    }
  }

  export const fetchCustomerData = async () => {
    try {
      const response = await axios.get('https://chanlepro.online/api/booking');
  
      console.log(response.data)
  
  
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
  export const putTotalPay = async (id) => {
    try {
      const response = await axios.get('https://chanlepro.online/api/order/'+id);
      
   console.log(response.data.data)
      return response.data.data;
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ API:', error);
      return [];
    }
  }
  export const putTablethanhtoan = async (id) => {
    try {
      const response = await axios.put('https://chanlepro.online/api/table/updateTableStatus-'+id+'?available=true');
      
      console.log(response)
      return response.data.data;
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ API:', error);
      return [];
    }
  }
  
  export const handlAddtotal = async (id, repon) => {
    try {
      const response = await axios.put('https://chanlepro.online/api/order/update/'+id,repon)
      
      
      console.log(response.data)
      return response.data.data;
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ API:', error);
      return [];
    }
  }
  
 