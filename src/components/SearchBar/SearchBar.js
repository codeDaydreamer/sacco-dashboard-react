import React from 'react';
import { TextField, InputAdornment, useTheme } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = () => {
  const theme = useTheme();

  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      size="small" // Make the TextField smaller
      sx={{
        borderRadius: '8px', // Set border radius
        backgroundColor: theme.palette.background.paper,
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px', // Ensure input itself has the same border radius
          '& fieldset': {
            borderColor: theme.palette.primary.main,
          },
          '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
