import axios from 'axios';

export const fetchMenuData = async () => {
  try {
    const response = await axios.get('https://chanlepro.online/api/menu');

    const data =response.data.data;

    const modifiedData = data.map(item => {
      item.imageUrl = 'https://chanlepro.online/api/menu/'+item.imageUrl; // Thay 'URL_MỚI' bằng chuỗi mới bạn muốn sử dụng

      console.log(item)
      return item;
    });
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu từ API:', error);
    return [];
  }
};
