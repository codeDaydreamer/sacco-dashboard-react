import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const DateRangeSelector = () => {
  const [value, setValue] = useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <DateRangePicker
          startText="Start Date"
          endText="End Date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </>
          )}
        />
        <Button variant="contained" color="primary">Apply</Button>
      </Box>
    </LocalizationProvider>
  );
};

export default DateRangeSelector;

