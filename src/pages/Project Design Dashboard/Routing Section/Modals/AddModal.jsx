import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SaveIcon from '@mui/icons-material/Save';

import { CircularProgress, FormControl, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import { createPageAPIHandler } from "../../../../../actions/pages";
import { useDispatch, useSelector } from "react-redux";
import { createRoute } from "../../../../actions/route";
import { useEffect } from "react";
import { getPagesOfProjectAPIHandler } from "../../../../actions/pages";




const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  minWidth: 400,
  minHeight: 250,
  defaultHeight: 250,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  pb: 2,
};

export default function AddModal({ open, handleClose }) {

  const params = useParams()
  const dispatch = useDispatch()

  const [formSubmissionProperties, setFormSubmissionProperties] = useState({ loading: false, error: null, success: null })

  const [routeObj, setRouteObj] = useState({})
  const [loading, setLoading] = useState(false)
  const pagesObj =  useSelector(state => state.page)


  const createRouteHandler = (e) => {
    e.preventDefault()
    const finalObj = {...routeObj,projectId: params.projectId}
    console.log(finalObj)
    dispatch(createRoute(finalObj, handleClose,setFormSubmissionProperties))
  }
  console.log(open)

  useEffect(() => {
    dispatch(getPagesOfProjectAPIHandler(params.projectId,setLoading))
    setRouteObj({status: true})
  }, [open])  



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={createRouteHandler}>
          <Box sx={style} >
            <div className="h-full flex flex-col justify-between ">

              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add new Route
                </Typography>
              </div>
              <div>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div>
                    <p className='font-extralight'>Name your new Route</p>
                    <TextField fullWidth type='text' required value={routeObj?.name} onChange={(e) => setRouteObj({ ...routeObj,name: e.target.value })} />
                  </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div>
                    <p className='font-extralight'>Route Path</p>
                    <TextField fullWidth type='text' required value={routeObj?.path} onChange={(e) => setRouteObj({ ...routeObj,path: e.target.value })} />
                  </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div>
                    <p className='font-extralight'>Select Target Page</p>
                    <FormControl fullWidth >
                      <InputLabel id="demo-simple-select-label">Target Page</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        required
                        id="demo-simple-select"
                        value={routeObj?.targetedPageId}
                        label="Target Page"
                        onChange={(e) => setRouteObj({ ...routeObj,targetedPageId: e.target.value })}
                      >
                        {pagesObj?.map((page) => (
                        <MenuItem value={page?._id}>{page?.name}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="flex flex-row items-center">
                    <p className='font-extralight'>Please select your Route status</p>
                    <Switch
                      checked={routeObj?.status}
                      color="success"
                      onChange={(e) => setRouteObj({...routeObj, status: routeObj?.status ? false : true })}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p className={`font-bold ${routeObj?.status ? 'text-green-600' : 'text-red-600'}`}>{routeObj?.status ? 'Active' : 'Inactive'}</p>
                    {/* <TextField fullWidth type='text' onChange={(e) => setRouteObj({ name: e.target.value })} /> */}
                  </div>
                </Typography>
              </div>
              <div className="mt-4 mb-0 justify-end gap-3 flex">
                <Button variant="contained" color='inherit' onClick={handleClose} >Cancel</Button>
                <Button variant="contained" type="submit" color='primary'
                  disabled={formSubmissionProperties?.loading}
                  startIcon={formSubmissionProperties?.loading && (<CircularProgress color="inherit" size={20} />)} >
                  {formSubmissionProperties?.loading ? ("Creating Route...") : "Create Route"}
                </Button>

              </div>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
