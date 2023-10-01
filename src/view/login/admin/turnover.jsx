import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './../../../style/login/admin/turnover.css'

function Turnover() {
  const [chartType, setChartType] = useState('tuan');
  const [dataBarweek ,setDataBarweek]=useState([1,2,3,4,5,6,7]);
  const [dataBaryear ,setDataBaryear]=useState([12,11,10,9,8,7,6,5,4,3,2,1]);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Doanh thu',
      },

    },
  };

  const labelsweek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const labelsyear = ['January', 'February', 'March', 'March', 'May', 'June', 'July','August','September','October','October','December'];
  const dataweek = {
   labels: labelsweek,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataBarweek,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },

    ],
  };
  const datayear = {
    labels: labelsyear,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataBaryear,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },

    ],
  };

  const handleChartTypeChange = (event) => {


  

    setChartType(  event.target.value)


  };
  console.log(chartType)

  return (
    <div>
      <div className="title">
        <label >Bạn muốn thống kê theo </label>
        <select value={chartType} onChange={handleChartTypeChange}>
          <option value="tuan">Theo Tuần</option>
          <option value="thang">Theo Tháng</option>
        </select>
      </div>
      <div className="Bar" style={{ width: '1000px', height: '500px' }} >
        {
          chartType === 'tuan' ? <Bar data={dataweek} options={options} />:<Bar data={datayear} options={options} />
        }
      
      </div>
    </div>
  );
}

export default Turnover;






