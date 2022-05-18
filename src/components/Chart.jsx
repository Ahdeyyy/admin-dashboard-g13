import  React from 'react'
import {  Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto'


const Chart = () => {
    const lineChartData = {
        labels: ["September","October", "November", "December", "January", "February", "March", "April", "May"],
        datasets: [
          {
            data: [1.9, 1.7, 2.3, 2.2, 1.5, 1.7,1.4, 1.9, 1.2 ],
            label: "Value in millions",
            borderColor: "#D65A31",
            fill: true,
            lineTension: 0
          }
        ]
        
      };
      
    return ( 
        <Line
      type="line"
      width={10}
      height={10}
      options={{
        title: {
          display: false,
          text: "COVID-19 Cases of Last 6 Months",
          fontSize: 20
        },
        legend: {
          display: false, //Is the legend shown?
          position: "left" //Position of the legend.
        },
        responsive: true, 
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: { display: false,
                color: "#D65A31"},
                gridLines: {
                    color: "red",
                    drawBorder: false
                }
            },
            y: {
                ticks: { display: false,
                    color: "#D65A31"
                 },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
        }
        }
        
      }}
      data={lineChartData}
    />
     );
}

export default Chart;