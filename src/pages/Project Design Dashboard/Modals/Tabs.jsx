import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Component, Layout} from '../../common/components/components';
import { components,lyouts } from '../../../mockdata/components';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({setpropertiesList, setOpen,handleModelClose}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}  aria-label="basic tabs example">
          <Tab label="Components" {...a11yProps(0)} />
          <Tab label="Layout" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='grid grid-flow-row gap-2'>
      {components.map(name=>(
        <Component name={name} setpropertiesList={setpropertiesList} setOpen={setOpen} handleModelClose={handleModelClose} />
      ))}
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <div className='grid grid-flow-row gap-2'>
      {lyouts.map(name=>(
        <Layout name={name} />
      ))}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
