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

const Menus = [
    { title: "Pages", src: <MdHomeFilled size={20} />, path: '' },
    { title: "Routing", src: <ImBooks size={20} />, path: 'projects' },
    { title: "Publish", src: <BiSolidComponent size={20} />, path: 'components' },
    { title: "Export", src: 'Explore Projects', gap: true, type: "explore", path: 'explore' }
];
const Sidebar = () => {

   

    return (
        <div
            className={`absolute w-20 ${open ? "w-60" : "w-20 "
                } bg-white  border-l border-r z-0  pl-5 pr-5 pt-8  duration-300 dark:text-gray-300 flex flex-col h-screen sticky top-10`}
        >
            
            {/* <MdExpandCircleDown
        size={30}
          className={`absolute cursor-pointer opacity-50 hover:opacity-100 -right-3 top-9  text-slate-400  rounded-full  ${!open ?  "-rotate-90" : 'rotate-90'}`}
          onClick={() => setOpen(!open)}
        /> */}
            <div className="flex gap-x-4 items-center">

                <h1
                    className={`text-gray-600 dark:text-white origin-left font-medium text-xl duration-200 `}
                >
                    Pages Section
                </h1>
            </div>
            <div className="mt-5">
                <div className="flex flex-row justify-between items-center">
                    <p>Pages</p>
                    <IconButton color="success">
                        <AddIcon />
                    </IconButton>
                </div>

                <div>
                    <PageItem />
                </div>

            </div>
        </div>

    );
};
export default Sidebar;
