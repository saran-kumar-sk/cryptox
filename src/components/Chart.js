import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Chart() {
  const chartProps = {
    series: [
      {
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        toolbar: false,
        sparkline: {
          enabled: false,
        },
        selection: {
          enabled: false,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: [
            'rgb(92,117,100)',
            'rgb(150,109,23)',
            'rgb(36,30,46)',
            'rgb(20,23,35)',
          ],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 0.4,
          opacityTo: 0.6,
        },
      },
      colors: ['#546E7A', '#E91E63', '#FF9800'],
      markers: {
        size: 0,
      },
      grid: {
        show: true,
        borderColor: 'rgb(31,26,28)',
        row: {
          colors: undefined,
          opacity: 0.5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        curve: 'smooth',
        color: 'red',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '1/11/2000',
          '2/11/2000',
          '3/11/2000',
          '4/11/2000',
          '5/11/2000',
          '6/11/2000',
          '7/11/2000',
          '8/11/2000',
          '9/11/2000',
          '10/11/2000',
          '11/11/2000',
          '12/11/2000',
          '1/11/2001',
          '2/11/2001',
          '3/11/2001',
          '4/11/2001',
          '5/11/2001',
          '6/11/2001',
        ],
        tickAmount: 0,
      },
      yaxis: {
        min: 0,
        max: 40,
      },
    },
  };

  return (
    <ReactApexChart
      type="area"
      options={chartProps.options}
      series={chartProps.series}
      height={350}
    />
  );
}

export default Chart;
