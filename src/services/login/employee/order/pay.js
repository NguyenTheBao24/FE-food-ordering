
import axios from 'axios';
export const putPay = async (id) => {
    try {
      const response = await axios.get('https://chanlepro.online/api/order/'+id);

      
      const calculatedTotal = response.data.data.reduce((total, response) => {

        // console.log(total + response.total)
        return total + response.total;
    }, 0);
  //  console.log(response.data.data)
      return calculatedTotal;
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ API:', error);
      return [];
    }
  }