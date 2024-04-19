import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiMenuKebab } from 'react-icons/ci';
import { useState } from 'react'; 
import DeleteModal from '../../Project Design Dashboard/Modals/DeleteModal';
import EditProjectModal from '../Modals/EditProjectModal';


export default function BasicMenu({setOpenDel,openDel,project}) {
  const navigate = useNavigate()
  // const [openDel, setOpenDel] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenDel = () => {
    setOpenDel(true)
    console.log(openDel)
    setAnchorEl(null);
  };
  const handleOpenEdit = () => {
    setOpenEdit(true)
    console.log(openEdit)
    setAnchorEl(null);
  }
  const handleCloseDel = () => setOpenDel(false);
  const handleCloseEdit = () => setOpenEdit(false);

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


  console.log(project)
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
        {/* <MenuItem onClick={handleClose}>Preview</MenuItem> */}
        <MenuItem onClick={handleOpenEdit}>Edit</MenuItem>
        <MenuItem onClick={handleOpenDel} >Move to Trash</MenuItem>
      </Menu>
      {openDel && <DeleteModal projectId={project?._id} openDel={openDel} handleCloseDel={handleCloseDel} />}
      {openEdit && <EditProjectModal project={project} openEdit={openEdit} handleCloseEdit={handleCloseEdit} />}
    </div>
  );
}