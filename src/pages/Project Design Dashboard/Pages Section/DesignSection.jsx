import React, { useState } from "react";

import { useSelector } from "react-redux";
import { TreeItem, TreeView, } from "@mui/x-tree-view";
import { Box, IconButton } from "@mui/material";

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

// Modals Import
import DetailsModal from "./Modals/DetailsModal";
import EditElementModal from "./Modals/EditElementModal";
import DeleteElementModal from "./Modals/DeleteElementModal";
import AddElementModal from "./Modals/AddElementModal";

import {tagMapHandler} from '../../../utilities/tagsUtility'





function DesignSection() {
  const pageObj = useSelector(state => state.pageDesign.page)


  // Modal Handlers
  const [activeElementData, setActiveElementData] = useState({})
  
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  
  
  
  
  
  


// Details Modal Handlers

  const handleDetailModalOpen = () => setOpenDetailModal(true);
  const handleDetailModalClose = () => setOpenDetailModal(false);
  const elementDetailHandler = (nodes) =>{
    console.log(nodes)
    setActiveElementData(nodes)
    handleDetailModalOpen()
  }

  // ------------------------------- End of Modal Handlers -------------------------------


// Update Modal Handlers

  const handleUpdateModalOpen = () => setOpenUpdateModal(true);
  const handleUpdateModalClose = () => setOpenUpdateModal(false);
  const elementUpdateHandler = (nodes) =>{
    setActiveElementData(nodes)
    handleUpdateModalOpen()
  }

  // ------------------------------- End of Modal Handlers -------------------------------

// Add Modal Handlers

  const handleAddModalOpen = () => setOpenAddModal(true);
  const handleAddModalClose = () => setOpenAddModal(false);
  const elementAddHandler = (nodes) =>{
    console.log(nodes)
    setActiveElementData(nodes)
    handleAddModalOpen()
  }

  // ------------------------------- End of Modal Handlers -------------------------------


// Delete Modal Handlers

  const handleDeleteModalOpen = () => setOpenDeleteModal(true);
  const handleDeleteModalClose = () => setOpenDeleteModal(false);
  const elementDeleteHandler = (nodes) =>{
    console.log(nodes)
    setActiveElementData(nodes)
    handleDeleteModalOpen()
  }

  // ------------------------------- End of Modal Handlers -------------------------------



  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={(<div>
      <div className="flex justify-between items-center group">
        <div className="flex">
          <p className=" font-bold ">{tagMapHandler(nodes.name)}</p>
        </div>
        <div className="  gap-2 items-center  ">
          <IconButton aria-label="Add" onClick={()=>elementAddHandler(nodes)}>
            <AddIcon />
          </IconButton>
          <IconButton aria-label="Info" onClick={()=>elementDetailHandler(nodes)}>
            <InfoIcon />
          </IconButton>
          <IconButton aria-label="delete" color="error" onClick={()=>elementDeleteHandler(nodes)}>
            <DeleteIcon color="error"/>
          </IconButton>
          <IconButton aria-label="Edit" color="info" onClick={()=>elementUpdateHandler(nodes)}>
            <EditIcon color="info"/>
          </IconButton>

          </div>
      </div>
    </div>)} >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <>
    <DetailsModal open ={openDetailModal} handleClose = {handleDetailModalClose} elementData= {activeElementData}/>
    <AddElementModal open ={openAddModal} handleClose = {handleAddModalClose} elementData= {activeElementData}/>
    <DeleteElementModal open ={openDeleteModal} handleClose = {handleDeleteModalClose} elementData= {activeElementData}/>
    <EditElementModal open ={openUpdateModal} handleClose = {handleUpdateModalClose} elementData= {activeElementData}/>


    <div className="h-screen">
      <Box sx={{ minHeight: 110, flexGrow: 1 }}>
        <TreeView
          aria-label="rich object"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={['root']}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderTree(pageObj[0])}
        </TreeView>
      </Box>
    </div>
    </>
  );
}

export default DesignSection;
