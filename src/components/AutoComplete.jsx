import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useStyles } from './styles'

/**
 * In this component, i didn't use Mapping to achieve the results.
 * beccause i think it's better with traversal when the seletions are under 3.
 *
 * But if the number of InputFields exceeds three
 * or there is demand of expansion, i would rather switch to "Mapping".
 */

const AutoCompletedInput = ({
  location,
  selections,
  handleLocationSelected,
}) => {
  const classes = useStyles()

  const inputMapping = [
    {
      name: 'year',
      label: '年份',
      description: '年份',
      style: classes.yearContainer,
    },
    {
      name: 'county',
      label: '縣/市',
      description: '請選擇 縣/市',
      style: classes.inputContainer,
    },
    {
      name: 'district',
      label: '區',
      description: '請先選擇 縣/市',
      style: classes.inputContainer,
    },
  ]

  return (
    <Box className={classes.stackContainer}>
      {inputMapping.map((input, index) => {
        return (
          <Stack className={input.style} key={index}>
            <Autocomplete
              options={selections[input.name]}
              getOptionLabel={(option) => option.toString()}
              id="controlled-demo"
              value={location[input.name] || null}
              onChange={(e, newValue) => handleLocationSelected(e, newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={classes.focusedInput}
                  label={input.label}
                  placeholder={input.description}
                  size="small"
                  variant="outlined"
                />
              )}
              renderOption={(props, option) => {
                return (
                  <li {...props} data-name={input.name}>
                    {option}
                  </li>
                )
              }}
            />
          </Stack>
        )
      })}
      {/* <Stack className={classes.yearContainer}>
        <Autocomplete
          options={selections.year}
          getOptionLabel={(option) => option.toString()}
          id="controlled-demo"
          value={location.year || null}
          onChange={(e, newValue) => handleLocationSelected(e, newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="年份"
              variant="outlined"
              size="small"
              placeholder="年份"
              className={classes.focusedInput}
            />
          )}
          renderOption={(props, option) => {
            console.log('props', props)
            return (
              <li {...props} data-name="year">
                {option}
              </li>
            )
          }}
        />
      </Stack>
      <Stack className={classes.inputContainer}>
        <Autocomplete
          options={selections.county}
          getOptionLabel={(option) => option.toString()}
          id="controlled-demo"
          value={location.county || null}
          disabled={!location.year}
          onChange={(e, newValue) => handleLocationSelected(e, newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="縣/市"
              variant="outlined"
              size="small"
              placeholder="請選擇 縣/市"
              focused
              className={classes.focusedInput}
            />
          )}
          renderOption={(props, option) => (
            <li data-name="county" {...props}>
              {option}
            </li>
          )}
        />
      </Stack>
      <Stack className={classes.inputContainer}>
        <Autocomplete
          options={selections.district}
          getOptionLabel={(option) => option.toString()}
          id="controlled-demo"
          value={location.district || null}
          onChange={(e, newValue) => handleLocationSelected(e, newValue)}
          disabled={!location.county}
          renderInput={(params) => (
            <TextField
              {...params}
              label="區"
              variant="outlined"
              size="small"
              placeholder="請先選擇 縣/市"
              focused
              className={classes.focusedInput}
            />
          )}
          renderOption={(props, option) => (
            <li {...props} data-name="district">
              {option}
            </li>
          )}
        />
      </Stack> */}
    </Box>
  )
}

export default AutoCompletedInput
