import { useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Divider } from '@mui/material';

import BarChart from './BarChart.jsx';
import PieChart from './PieChart.jsx';
import { useStyles } from '../styles';

const Charts = ({ chartData }) => {
  const classes = useStyles();
  const { year, county, district } = useParams();
  const keyword = county + district;

  // set the localstorage, => refresh the pages could still maintain same data
  const data = localStorage.getItem('data');
  if (data === 'undefined') {
    localStorage.setItem('data', JSON.stringify(chartDataCalculated));
  }

  const chartDataCalculated = useMemo(() => {
    if (Object.keys(chartData).length !== 0) {
      return chartData.reduce(
        (acc, cur) => {
          if (cur.site_id === keyword) {
            acc.householdOrdinaryF += +cur.household_ordinary_f;
            acc.householdOrdinaryM += +cur.household_ordinary_m;
            acc.householdSingleF += +cur.household_single_f;
            acc.householdSingleM += +cur.household_single_m;
          }
          return acc;
        },
        {
          householdOrdinaryF: 0,
          householdOrdinaryM: 0,
          householdSingleF: 0,
          householdSingleM: 0,
        }
      );
    }
  }, [chartData]);

  return (
    <Box className={classes.chartsContainer}>
      <h1 className={classes.chartTitle}>
        {year}年 {county} {district}
      </h1>
      <BarChart chartDataCalculated={chartDataCalculated || JSON.parse(data)} />
      <Divider />
      <PieChart chartDataCalculated={chartDataCalculated || JSON.parse(data)} />
    </Box>
  );
};

export default Charts;
