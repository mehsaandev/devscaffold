import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { trashProject } from "../../../actions/project";



const style = {
  position: "absolute", 
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({ projectId,openDel, handleCloseDel }) {
  return (
    <div>
      <Modal
        open={openDel}
        onClose={handleCloseDel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete this project?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This project will be moved to trash.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <Button color="primary" onClick={handleCloseDel}>Cancel</Button>
            <Button variant="contained" color="warning" onClick={trashProject(projectId,handleCloseDel)}>
              Move to Trash
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
