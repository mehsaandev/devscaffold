import { useState } from "react";
import { MdExpandCircleDown, MdHomeFilled } from 'react-icons/md'
import { ImBooks } from 'react-icons/im'
import { BiSolidComponent, BiSearchAlt } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'

// Icons from MUI
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import { useNavigate } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import PageItem from "./PageItem";
import AddModal from "./Modals/AddModal";
import EditModal from "./Modals/EditModal";
import DeleteModal from "./Modals/DeleteModal ";

const Sidebar = () => {

    const [openAddModal, setOpenAddModal] = useState({ delete: true, add: false, edit: false, info: false })

    const handleAddModalClose = () => setOpenAddModal({ delete: false, add: false, edit: false, info: false })
    const handleAddModalOpen = () => setOpenAddModal({ delete: false, add: true, edit: false, info: false })

    const handleDeleteModalClose = () => setOpenAddModal({ delete: false, add: false, edit: false, info: false })
    const handleDeleteModalOpen = () => setOpenAddModal({ delete: true, add: false, edit: false, info: false })

    const handleEditModalClose = () => setOpenAddModal({ delete: false, add: false, edit: false, info: false })
    const handleEditModalOpen = () => setOpenAddModal({ delete: false, add: false, edit: true, info: false })

    const handleInfoModalClose = () => setOpenAddModal({ delete: false, add: false, edit: false, info: false })
    const handleInfoModalOpen = () => setOpenAddModal({ delete: false, add: false, edit: false, info: true })




    return (
        <div
            className={`absolute min-w-20 ${open ? "min-w-60" : "min-w-20 "
                } bg-transparent border-gray-300 dark:border-gray-700 border-l border-r z-0  pl-2 pr-2 pt-8  duration-300 dark:text-gray-300 flex flex-col h-screen sticky top-10`}
        >

            <AddModal open={openAddModal.add} handleClose={handleAddModalClose} />
            <EditModal open={openAddModal.edit} handleClose={handleAddModalClose} />
            <DeleteModal open={openAddModal.delete} handleClose={handleAddModalClose} />

            {/* <MdExpandCircleDown
        size={30}
          className={`absolute cursor-pointer opacity-50 hover:opacity-100 -right-3 top-9  text-slate-400  rounded-full  ${!open ?  "-rotate-90" : 'rotate-90'}`}
          onClick={() => setOpen(!open)}
        /> */}
            <div className="items-center ">

                <h1
                    className={`text-gray-600 dark:text-white origin-left  text-xl font-semibold duration-200`}
                >
                    Pages Section
                </h1>
            </div>
            <div className="mt-5">
                <div className="flex flex-row justify-between items-center bg-gray-100 dark:bg-light-white p-1 ">
                    <p>Pages</p>
                    <IconButton color="success" onClick={handleAddModalOpen}>
                        <AddIcon />
                    </IconButton>
                </div>
                {/* <div className="h-[1px] mt-1 mb-4 bg-gray-400" /> */}
                <div className="border-x border-2 border-slate-100  dark:border-gray-700 p-1">
                    {[0, 0, 0].map(() => (
                        <>
                            <PageItem handleDeleteModalOpen={handleDeleteModalOpen} handleEditModalOpen={handleEditModalOpen} />
                            <div className="h-[1px]  text-center items-center flex bg-gray-200 dark:bg-gray-700" />
                        </>
                    ))}
                </div>

            </div>
        </div>

    );
};
export default Sidebar;
