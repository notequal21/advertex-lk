import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import ApexCharts from 'apexcharts';

export const dataPicker = () => {
  if (
    document.querySelector('.stats-date__input_from') &&
    document.querySelector('.stats-date__input_to')
  ) {
    flatpickr('.stats-date__input_from input', {
      locale: Russian,
      dateFormat: 'd.m.Y',
    });
    flatpickr('.stats-date__input_to input', {
      locale: Russian,
      dateFormat: 'd.m.Y',
    });
  }
};

export const chart = () => {
  if (document.querySelector('.stats-chart__item')) {
    let seriesData = {
      name: 'Cost',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    };
    const params = {
      height: '280px',
    };

    let options = {
      chart: {
        type: 'area',
        height: params.height,

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      series: [seriesData],
      xaxis: {
        tooltip: {
          enabled: false,
        },
        axisBorder: {
          color: '#DCE2F0',
        },
        axisTicks: {
          color: '#DCE2F0',
        },
        crosshairs: {
          show: true,
          position: 'front',
          stroke: {
            color: '#3E4A7B',
            width: 1,
            dashArray: 4,
          },
        },
        labels: {
          style: {
            colors: ['#808AA7'],
            fontSize: '13px',
            fontFamily: 'Source Sans Pro',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        categories: [
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: ['#808AA7'],
            fontSize: '13px',
            fontFamily: 'Source Sans Pro',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label-hidden',
          },
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
        colors: 'transparent',
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        colors: 'transparent',
        strokeColors: 'transparent',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: 'circle',
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: 9,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          formatter: (seriesName) => {
            return seriesName + '$';
          },
        },
      },
      grid: {
        show: true,
        borderColor: '#DCE2F0',
        position: 'back',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      colors: ['#9914B3'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.55,
          opacityTo: 0,
          gradientToColors: ['#9914B3', '#9914B3'],
          stops: [0, 100],
        },
      },
    };
    let optionsLine = {
      chart: {
        type: 'line',
        height: params.height,

        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      series: [seriesData],
      xaxis: {
        labels: {
          colors: ['#808AA7'],
          fontSize: '13px',
          fontFamily: 'Source Sans Pro',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-label-hidden',
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
          '01-03-2023',
        ],
      },
      yaxis: {
        labels: {
          colors: ['#808AA7'],
          fontSize: '13px',
          fontFamily: 'Source Sans Pro',
          fontWeight: 400,
          cssClass: 'apexcharts-yaxis-label-hidden',
        },
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
        colors: '#021751',
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: 'circle',
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: 7,
        },
      },
      tooltip: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      colors: ['#7023BC'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#9914B3'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
        },
      },
    };

    let chart = new ApexCharts(
      document.querySelector('.stats-chart__item'),
      options
    );
    let chartLine = new ApexCharts(
      document.querySelector('.stats-chart__item-line'),
      optionsLine
    );

    chart.render();
    chartLine.render();
  }
};
