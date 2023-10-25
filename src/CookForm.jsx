import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';

// formInputs:
    // Meat & Cut
    // Weight(?)
    // Temperature
    // Rub(s)
    // Rest

export default function CookForm({addCook}) {
  const [data, setData] = useState({
        cookName: "",
        cookTemp: 225,
        cookTime: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => {
        return ({...prevData, [name]: value});
    })
  };

  const [value, setValue] = useState(225);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    return (data.cookTemp = newValue);
  };

  const handleSubmit = (e) => {
    addCook(data);
    setData({
      cookName: "",
      cookTemp: 225,
      cookTime: ""
    });
  };

  const [show, setShow] = useState(false)

  return (
    <>
    {show ? <form onSubmit={handleSubmit}>
    <Box sx={{width: "100%", maxWidth: 360 }}>
      <FormControl className="FormElement">
        <TextField 
          id="outlined-basic" 
          label="Name" variant="outlined" 
          name="cookName" 
          onChange={handleChange}
        />
      </FormControl>
      <FormControl className="FormElement" sx={{marginTop: 1}}>
        <TextField 
          id="outlined-basic" 
          label="Time (in minutes)" 
          variant="outlined" 
          name="cookTime"
          onChange={handleChange} 
          />
      </FormControl>
      <InputLabel className="FormElement">Cook Temperature: {value}</InputLabel>
      <Slider sx={{ width: "93%", maxWidth: 360, marginLeft: 1.5, marginTop: -1.5 }}
        size="small"
        defaultValue={225}
        aria-label="Always Visible"
        valueLabelDisplay="auto"
        min={165}
        max={400}
        step={5}
        name="cookTemp"
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
            aria-labelledby="input-slider"
      />
    <Button className="FormElement" variant="contained" size="medium" disableElevation sx={{minWidth:225, width: "100%", maxWidth: 360, m: .25, p: 1.9}} type="submit" onSubmit={handleSubmit}>Add Cook</Button>
    </Box>
    
 </form> : null}
    {!show ? <Button variant="outlined" size="small" className="FormElement" onClick={() => setShow(!show)}>
            Add A Cook
    </Button> : null}
    </>
  );
}