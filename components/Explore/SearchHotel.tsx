import React, { useEffect, useState } from "react";
import {
  Grid,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
  Autocomplete
} from "@mui/material";
 
import {
  LocationOn as PinIcon,
  Search as MagnifierIcon,
} from "@mui/icons-material";
import clsx from "clsx";
import { search } from "./api";


const SearchHotel = (setCityCode: (arg0: any) => void) => {
  
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const { process } = search(inputValue);

    process((options: React.SetStateAction<never[]>) => {
      setOptions(options);
    });

    return 
  }, [inputValue]);

  return (
    <div className="w-full h-screen border  p-20">
      <Autocomplete
        autoComplete
        autoHighlight
        freeSolo
        disableClearable
        blurOnSelect
        clearOnBlur
        options={options}
        onChange={(event, newValue) => {
          setCityCode(newValue.code);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        getOptionLabel={(option) => option.city || ""}
        renderOption={(option) => {
          return (
            <Grid container alignItems="center">
              <Grid item>
                <PinIcon  />
              </Grid>
              <Grid item xs>
                <div>{option.city}</div>
                <Typography variant="body2" color="textSecondary">
                  {option.country}
                  {option.state ? `, ${option.state}` : ""}
                </Typography>
              </Grid>
            </Grid>
          );
        }}
        renderInput={(props) => (
          <TextField
            {...props}
            placeholder="Search"
            label="City"
            variant="outlined"
	    className="w-96 bg-white "
            InputProps={{
              ...props.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <MagnifierIcon
                    
                  />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default SearchHotel;