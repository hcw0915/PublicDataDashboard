import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { useStyles } from './styles';

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
  const classes = useStyles();
  return (
    <Box className={classes.stackContainer}>
      <Stack className={classes.yearContainer}>
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
              focused
              className={classes.focusedInput}
            />
          )}
          renderOption={(props, option) => (
            <li {...props} data-name="year">
              {option}
            </li>
          )}
        />
      </Stack>
      <Stack className={classes.inputContainer}>
        <Autocomplete
          options={selections.county}
          getOptionLabel={(option) => option.toString()}
          id="controlled-demo"
          value={location.county || null}
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
            <li {...props} data-name="county">
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
      </Stack>
    </Box>
  );
};

export default AutoCompletedInput;
