import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useStyles } from '../styles';

const BarChart = ({
  chartDataCalculated: {
    householdOrdinaryF,
    householdOrdinaryM,
    householdSingleF,
    householdSingleM,
  },
}) => {
  const classes = useStyles();

  const options = {
    chart: {
      type: 'column',
      height: '600',
      backgroundColor: 'transparent',
    },
    title: {
      text: '人口數統計',
    },
    xAxis: {
      categories: ['共同生活', '獨立生活'],
      crosshair: true,
      title: {
        text: '型態',
        y: 0,
        x: 0,
        style: {
          color: '#333333',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: '數量',
        align: 'high',
        y: -25,
        x: 35,
        rotation: 0,
        tickInterval: 2500,
        style: {
          color: '#333333',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
        },
      },
    },
    accessibility: {
      enabled: false,
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '1rem',
          },
          format: '{point.y:,.0f}',
        },
      },
    },
    series: [
      {
        name: '男性',
        data: [householdOrdinaryF, householdSingleF],
      },
      {
        name: '女性',
        data: [householdOrdinaryM, householdSingleM],
      },
    ],
  };

  return (
    <div className={classes.barChartContainer}>
      <HighchartsReact highcharts={Highcharts} options={options} />;
    </div>
  );
};

export default BarChart;
