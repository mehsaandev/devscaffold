import { useState } from "react";
import React from 'react'
import LogoOnly from '../../assets/LogoOnly.png'
import {MdExpandCircleDown,MdOutlinePublish} from 'react-icons/md'
import {RiCheckboxMultipleBlankLine} from 'react-icons/ri'
import {LuComponent} from 'react-icons/lu'
import {BiSearchAlt} from 'react-icons/bi'

import {FaImage} from 'react-icons/fa'
import {TbUserShare} from 'react-icons/tb'

import { useNavigate } from "react-router-dom";

const Menus = [
  { title: "Pages", src: <RiCheckboxMultipleBlankLine className='text-slate-400 ' size={23}/>, path:'/home' },
  { title: "Routes", src:  <LuComponent className='text-slate-400' size={23}/> , path:'/projects'},
  
  { title: "Assets", src: <FaImage className='text-slate-400' size={18}/>, path:'trash'},
  { title: "Publish", src: <TbUserShare className='text-slate-400' size={22} />, path:'components'  },
  { title: "Export", src: <MdOutlinePublish className='text-slate-400' size={22} />, path:'components'  },
];
const Sidebar = () => {

  const [sideBarItemsList, setSideBarItemsList] = useState({Menus:Menus, activeIndex:0})
  const [open, setOpen] = useState(true);
  const navigate = useNavigate()

  const changeTabHandler = (index,path) =>{
    console.log(path)
    setSideBarItemsList({...sideBarItemsList, activeIndex:index})
    navigate(path)
  }


  return (
      <div
        className={`w-24 bg-transparent shadow-lg pl-5 pr-5 pt-16  duration-300 dark:text-gray-300 flex flex-col h-screen sticky top-10 z-10`}
      >
        
        <ul className="pt-6">
          {sideBarItemsList?.Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer ${Menu.type=="explore"? "hover:bg-blue-900 ": "hover:bg-slate-200 hover:dark:bg-light-white"}   text-sm items-center  gap-x-4 
               ${Menu.gap ? "mt-9" : "mt-2"} ${
                sideBarItemsList?.activeIndex === index && Menu.type != "explore"  && "bg-slate-200 dark:bg-light-white "
              } ${Menu.type === "explore" && " flex justify-center font-bold text-slate-200 bg-blue-800 "}`}

              onClick={() =>changeTabHandler(index,Menu?.path)}
            >
                {Menu.type =="explore" ? !open ?  <BiSearchAlt size={18}/> : Menu.src : Menu.src  }
                
            </li>
          ))}
        </ul>
      </div>
      
  );
};
export default Sidebar;
