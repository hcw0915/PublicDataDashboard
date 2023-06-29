import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useStyles } from '../styles';

const PieChart = ({
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
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: '600',
      backgroundColor: 'transparent',
    },
    title: {
      text: '戶數統計',
      align: 'center',
    },
    tooltip: {
      pointFormat: '<b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      enabled: false,
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        showInLegend: true,
        dataLabels: {
          enabled: true,
          format: '{point.percentage:.1f} %',
          style: {
            fontSize: '1.1rem',
          },
        },
      },
    },
    series: [
      {
        name: '戶數',
        colorByPoint: true,
        data: [
          {
            name: '共同生活',
            y: +householdOrdinaryF + +householdOrdinaryM,
          },
          {
            name: '獨立生活',
            y: +householdSingleF + +householdSingleM,
          },
        ],
      },
    ],
  };

  return (
    <div className={classes.pieChartContainer}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
