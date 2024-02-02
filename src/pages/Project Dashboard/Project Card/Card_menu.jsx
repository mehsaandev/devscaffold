import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiMenuKebab } from 'react-icons/ci';
import { useState } from 'react'; 
import DeleteModal from '../../Project Design Dashboard/Modals/DeleteModal';


export default function BasicMenu(project) {
  const navigate = useNavigate()
  const [openDel, setOpenDel] = useState(false);
  const handleOpenDel = () => {
    setOpenDel(true)
    console.log(openDel)
    setAnchorEl(null);
  };
  const handleCloseDel = () => setOpenDel(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditClose = () => {
    navigate(`/dashboard/project/${project?._id}`)
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <CiMenuKebab />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Preview</MenuItem>
        <MenuItem onClick={handleEditClose}>Edit</MenuItem>
        <MenuItem onClick={handleOpenDel} >Delete</MenuItem>
      </Menu>
      {openDel && <DeleteModal openDel={openDel} handleCloseDel={handleCloseDel} />}
    </div>
  );
}