import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

// UIs
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// functions & Components & styles
import Charts from '../Charts'
import AutoCompletedInput from '../AutoComplete.jsx'
import { useStyles } from '../styles'
import { getData, getAreaFormatted } from '../functions'

// Constants

const BASE_URL = 'https://www.ris.gov.tw/rs-opendata/api/'

const initialSelections = { year: [], county: [], district: [] }
const initialLocation = { year: '', county: '', district: '' }

const Dashboard = () => {
  const [selections, setSelections] = useState(initialSelections)
  const [location, setLocation] = useState(initialLocation)
  const [unChangableDistricts, setUnChangableDistricts] = useState([])
  const [chartData, setChartData] = useState({})
  const navigate = useNavigate()
  const classes = useStyles()

  const handleSubmit = () => {
    const { year, county, district } = location
    navigate(`/${year}/${county}/${district}`)
  }

  const handleLocationSelected = (e, value) => {
    const name = e.target.getAttribute('data-name')
    if (name === 'year') {
      setLocation((prev) => ({ ...prev, county: '', district: '' }))
    }
    if (name === 'county') {
      setLocation((prev) => ({ ...prev, district: '' }))
      console.log(unChangableDistricts)
      const filteredDistricts = unChangableDistricts
        .filter((item) => item.startsWith(value))
        .map((ele) => ele.slice(3))
      setSelections((prev) => ({ ...prev, district: filteredDistricts }))
    }
    setLocation((prev) => ({ ...prev, [name]: value }))
  }

  // <- useEffect -> Get initial Years which is available in API Docs.
  useEffect(() => {
    getData(`${BASE_URL}Main/docs/v1`).then((data) => {
      const yearArray =
        data.paths['/ODRP019/{yyy}'].get.parameters[0].enum ?? []
      setSelections({ ...selections, year: yearArray })
    })
  }, [])

  // <- useEffect -> Get other options according to years we've selected.
  useEffect(() => {
    if (location.year) {
      getData(`${BASE_URL}v1/datastore/ODRP019/`, location.year).then(
        (data) => {
          // console.log(data)
          const [counties, countiesAndDistricts] = getAreaFormatted(data)
          setSelections((prev) => ({ ...prev, county: counties }))
          if (JSON.stringify(data.responseData) !== JSON.stringify(chartData)) {
            setChartData(data.responseData)
          }
          if (
            JSON.stringify(countiesAndDistricts) !==
            JSON.stringify(unChangableDistricts)
          ) {
            setUnChangableDistricts(countiesAndDistricts)
          }
        }
      )
    }
  }, [location.year])

  return (
    <Box className={classes.dashboardContainer}>
      <Box className={classes.upperSection}>
        <div className={classes.title}>人口數、戶數按戶別及性別統計</div>

        <Box className={classes.selectSection}>
          <Box className={classes.selects}>
            <AutoCompletedInput
              location={location}
              selections={selections}
              handleLocationSelected={handleLocationSelected}
            />
          </Box>
          <Button
            className={classes.button}
            variant="contained"
            onClick={handleSubmit}
            disabled={!location.district && true}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>

      <Box className={classes.searchSection}>
        <Typography className={classes.searchResultText}>搜尋結果</Typography>
      </Box>

      <Box className={classes.chartSection}>
        <Routes>
          <Route path="/" element={<></>} />
          <Route
            path={'/:year/:county/:district'}
            element={<Charts chartData={chartData} />}
          />
        </Routes>
      </Box>
    </Box>
  )
}

export default Dashboard
