import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SaveIcon from '@mui/icons-material/Save';

import { CircularProgress, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import { createPageAPIHandler } from "../../../../../actions/pages";
import { useDispatch } from "react-redux";
import { createRoute } from "../../../../actions/route";




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

  const param = useParams()
  const dispatch = useDispatch()

    const [formSubmissionProperties, setFormSubmissionProperties] = useState({loading: false, error: null, success: null})


  const [pageObj, setPageObj] = useState({})
  const createPageHandler = (e) => {
    e.preventDefault()
 


    dispatch(createRoute(formObj,handleClose))

  }



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={createPageHandler}>
          <Box sx={style} >
            <div className="h-full flex flex-col justify-between ">

              <div>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Add new Page
                </Typography>
              </div>
              <div>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div>
                    <p className='font-extralight'>Name your new Page</p>
                    <TextField fullWidth type='text' onChange={(e) => setPageObj({ name: e.target.value })} />
                  </div>
                </Typography>
              </div>
              <div className="mt-4 mb-0 justify-end gap-3 flex">
                <Button variant="contained" color='inherit' >Cancel</Button>
                <Button variant="contained" type="submit" color='primary' 
                disabled={formSubmissionProperties?.loading} 
                startIcon={formSubmissionProperties?.loading && (<CircularProgress color="inherit"  size={20}/>) } >
                  {formSubmissionProperties?.loading ? ("Creating Page..."): "Create Page" }
                  </Button>

              </div>
            </div>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
