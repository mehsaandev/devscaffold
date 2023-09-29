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

const options = ['Button', 'Text', 'Heading'];

const ComponentsSection = () => {

    const [age, setAge] = React.useState('Select a component');

    const handleChange = (event) => {
      setAge(event.target.value);
    };


    return (
        <div className='shadow-lg p-5 border border-black rounded-md'>
            <h1>Components</h1>

            <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    // label="Age"
                    onChange={handleChange}
                    placeholder='Select a component'
                >
                    {options.map((option,index) => (

                    <MenuItem value={index}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>



            <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    // label="Age"
                    onChange={handleChange}
                    placeholder='Select a Position'
                >
                    {options.map((option,index) => (

                    <MenuItem value={index}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    )
}

export default ComponentsSection