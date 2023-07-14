import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  // Dashboard
  dashboardContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '91%',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.9)',
    },
  },
  upperSection: {
    minWidth: '100%',
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
    },
  },
  selects: {
    [theme.breakpoints.down('md')]: {
      width: '90%',
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
    width: '70%',
    height: '1px',

    margin: '55px 0px',
    backgroundColor: '#C29FFF',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  searchResultText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100px',
    height: '35px',
    border: '1px solid #C29FFF',
    borderRadius: '20px',
    padding: '5px',
    backgroundColor: '#ffffff',
    color: '#C29FFF',
    [theme.breakpoints.down('md')]: {
      fontSize: '25px',
    },
  },
  chartSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
  chartTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  chartsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'auto',
    height: '700px',
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
}))
