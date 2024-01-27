import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { CiMenuKebab } from 'react-icons/ci';
import DeleteModal from '../../Project Design Dashboard/Modals/DeleteModal';

export default function BasicMenu(project) {
  const navigate = useNavigate()
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEditClose = () => {
    navigate(`/dashboard/project/${project?._id}`)
    setAnchorEl(null);
  };
  const handleDeleteClose = () => {
    setOpenDeleteModal(true)
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
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}