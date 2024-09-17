"use client";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const data={
    labels: [
        2020,
        2021,
        2022,
        2023,
        2024
    ],
    datasets:[{
        label: "Number of total jobs for that year",
        data: [75,218,1655,8519,6027],
        borderColor: "#593690",
        pointHoverRadius: 15,
        pointHoverBackgroundColor: '#593690'
    }]
};

const options = {
    elements: {
        point: {
          radius: 10,
        },
      },
    plugins: {
        tooltip: {
            backgroundColor: '#593690',
            titleColor: 'white', 
            bodyColor: 'white', 
            borderColor: 'rgba(255, 255, 255, 0.5)', 
            borderWidth: 4, 
          },
        legend: {
          labels: {
            color: '#593690',
            font: {
                size: 16, 
            },
          }
        }
      },
    scales: {
      y: {
        ticks: { 
            color: '#593690',
            font: {
                size: 16, 
            },
        }
      },
      x: {
        ticks: { 
            color: '#593690',
            font: {
                size: 16, 
            },
        }
      }
    }
};

function LineGraph() {
  return (
    <div className="w-1/2"><Line options={options} data={data}/></div>
  );
}

export default LineGraph;