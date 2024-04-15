import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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

export default function EditModal({ open, handleClose }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <div className="h-full flex flex-col justify-between ">

                    <div>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update Page
                    </Typography>
                    </div>
                    <div>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <p className='font-extralight'>Name your new Page</p>
                            <TextField  fullWidth type='text' />
                        </div>
                    </Typography>
                    </div>
                    <div className="mt-4 mb-0 justify-end gap-3 flex">
                        <Button variant="contained" color='inherit' >Cancel</Button>
                        <Button variant="contained" color='primary' >Update Page</Button>

                    </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
