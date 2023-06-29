import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  // Dashboard
  dashboardContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    minWidth: '91%',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      backgroundColor: 'rgba(255,255,255,0.9)',
      height: '100%',
      width: '100%',
    },
  },
  upperSection: {
    minWidth: '100%',
    margin: '30px 0 0 0 ',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 0 0 0 ',
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      margin: '0',
      fontSize: '1.6rem',
    },
  },
  selectSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 0 0 0 ',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      zIndex: '10',
    },
  },
  selects: {
    [theme.breakpoints.down('md')]: {
      width: '90%',
      backgroundColor: '#49536',
    },
  },
  button: {
    height: '2.5rem',
    fontSize: '1rem',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  searchSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '55px 0px',
    height: '1px',
    width: '80%',
    backgroundColor: '#C29FFF',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  searchResultText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35px',
    width: '100px',
    padding: '5px',
    borderRadius: '20px',
    color: '#C29FFF',
    backgroundColor: '#ffffff',
    border: '1px solid #C29FFF',
    [theme.breakpoints.down('md')]: {
      fontSize: '25px',
    },
  },
  chartSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      fontSize: '1',
    },
  },

  // AutoCompletedInput
  stackContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '10px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      margin: '10px 0 ',
      width: '100%',
    },
  },
  inputContainer: {
    width: 150,
    marginRight: '10px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px 0 ',
      width: '100%',
    },
  },
  yearContainer: {
    width: 100,
    marginRight: '10px',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      margin: '10px 0 ',
      width: '30%',
    },
  },
  // for TextField
  focusedInput: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#bdbdbd',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#4b4b4b',
    },
  },

  // Charts
  chartsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    [theme.breakpoints.down('md')]: {
      overflowY: 'hidden',
      width: '100%',
      height: '100%',
    },
  },

  // barChart
  barChartContainer: {
    width: '1000px',
    marginRight: '30px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  // pieChart
  pieChartContainer: {
    width: '1000px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
}));
