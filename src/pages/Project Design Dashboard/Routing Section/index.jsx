import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getRoutesOfProject } from '../../../actions/route';
import { getPageNameById } from '../../../actions/pages';


import AddModal from './Modals/AddModal';
import DeleteModal from './Modals/DeleteModal';
import EditModal from './Modals/EditModal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';




export default function FullFeaturedCrudGrid() {

  const dispatch = useDispatch()
  const routesList = useSelector(state => state?.route?.routes)
  const params = useParams()

  const [loading, setLoading] = useState(false)


  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState(null)

  const openAddModalHandler = () => setOpenAddModal(true)
  const closeAddModalHandler = () => setOpenAddModal(false)
  const openEditModalHandler = () => setOpenEditModal(true)
  const closeEditModalHandler = () => setOpenEditModal(false)
  const openDeleteModalHandler = (route) => {
    setSelectedRoute(route)
    setOpenDeleteModal(true)
  }
  const closeDeleteModalHandler = () => setOpenDeleteModal(false)



  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }


  useEffect(() => {
    dispatch(getRoutesOfProject(params.projectId, setLoading))

  }, [openAddModal,openDeleteModal,openEditModal])


  console.log(routesList)



  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];;
  return (
    <>
      <AddModal open={openAddModal} handleClose={closeAddModalHandler} />
      <EditModal open={openEditModal} handleClose={closeEditModalHandler} />
      <DeleteModal open={openDeleteModal} handleClose={closeDeleteModalHandler} selectedRoute={selectedRoute} />
      <div class="bg-slate-200 w-screen h-screen">
        <div class="bg-white rounded-lg h-screen m-5 p-8">
          <div className='flex justify-between align-middle items-center mb-10'>
            <p class="font-sans font-bold text-2xl "> Project Routes</p>
            <Button variant="contained" onClick={openAddModalHandler} >Add New Route</Button>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow style={{ fontWeight: 'bold' }}>
                  <TableCell>Route Name</TableCell>

                  <TableCell align="center" className='font-bold'><h2>Route Path</h2></TableCell>
                  <TableCell align="center" className='font-bold'>Target Page</TableCell>
                  <TableCell align="center" className='font-bold'>Last Updated</TableCell>
                  <TableCell align="center" className='font-bold'>Status</TableCell>
                  <TableCell align="center" className='font-bold'>Actions</TableCell>
                  {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {routesList?.map((route) => (
                  <TableRow
                    key={route?.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {route?.name}
                    </TableCell>
                    <TableCell align="center">/{route.path}</TableCell>
                    <TableCell align="center">{(route?.pageName)}</TableCell>
                    <TableCell align="center">{route?.lastUpdated && new Date(route?.lastUpdated)?.toISOString()?.split('T')[0]}</TableCell>
                    <TableCell align="center"  >
                      <p className={`  rounded-lg p-1 ${route?.status === 'true' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'}`}>
                        {route?.status === 'true' ? 'Active' : 'Inactive'}
                      </p>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton aria-label="delete" color='primary' onClick={openEditModalHandler}>
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete" color='error' onClick={()=>openDeleteModalHandler(route)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>
    </>
  );
}