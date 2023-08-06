import { useState } from "react";
import logoOnly from '../../assets/LogoOnly.png'
import {MdExpandCircleDown,MdHomeFilled} from 'react-icons/md'
import {ImBooks} from 'react-icons/im'
import {BiSolidComponent,BiSearchAlt} from 'react-icons/bi'
import {FaTrash} from 'react-icons/fa'

import { useNavigate } from "react-router-dom";

const Menus = [
  { title: "Home", src: <MdHomeFilled size={20}/>, path:'/home' },
  { title: "Projects", src:  <ImBooks size={20}/> , path:'projects'},
  { title: "Components", src: <BiSolidComponent size={20} />, path:'components'  },
  { title: "Trash ", src: <FaTrash size={18}/>, path:'trash'},
  { title: "Explore Projects", src: 'Explore Projects', gap:true, type:"explore", path:'explore'}
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
        className={`absolute w-20 ${
          open ? "w-60" : "w-20 "
        } bg-transparent shadow-lg pl-5 pr-5 pt-8  duration-300 dark:text-gray-300 flex flex-col h-screen sticky top-10 z-10`}
      >
        <MdExpandCircleDown
        size={30}
          className={`absolute cursor-pointer opacity-50 hover:opacity-100 -right-3 top-9  text-slate-400  rounded-full  ${!open ?  "-rotate-90" : 'rotate-90'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
          width={20}
            src={logoOnly}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-gray-600 dark:text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            DevScaffold
          </h1>
        </div>
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
                {Menu.type != 'explore' && (
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
                )}
            </li>
          ))}
        </ul>
      </div>
      
  );
};
export default Sidebar;
