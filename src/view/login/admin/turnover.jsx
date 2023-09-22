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
  const [dataBar ,setDataBar]=useState([10, 20, 30, 40, 50, 8, 2])
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

  const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataBar,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },

    ],
  };

  const handleChartTypeChange = (event) => {

    event.target.value === 'thang' ? setDataBar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]) : setDataBar([1, 2, 3, 4, 5, 6, 7])

    event.target.value === 'tuan' ? setDataBar([1, 2, 3, 4, 5, 6, 7]) : setDataBar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])


    setChartType(  event.target.value)


  };

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

        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Turnover;






