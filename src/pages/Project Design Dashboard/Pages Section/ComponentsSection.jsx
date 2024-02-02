import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { FormControl, InputLabel, Select } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from '../../../../redux/colors/colorsSlice';
const options = ['bg-black', 'mt-5', 'bg-white'];
const ComponentsSection = () => {
    const dispatch=useDispatch();
    const [age, setAge] = React.useState('Select a component');

    const handleChange = (event) => {
      setAge(event.target.value);
    };


    return (
        <div className='shadow-lg p-5 border border-black rounded-md'>
            <h1>Components</h1>





            <FormControl fullWidth>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age} // Make sure 'age' is defined or change it to the appropriate state variable
    placeholder='Select a Position'
  >
    {options.map((option, index) => (
      <MenuItem key={index} value={option} onClick={() => dispatch(changeColor(option))}>
        {option}
      </MenuItem>
    ))}
  </Select>
</FormControl>


        </div>
    )
}

export default ComponentsSection