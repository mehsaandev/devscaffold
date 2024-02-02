import { Box, Tab } from '@mui/material'
import Tabs from '../Modals/Tabs'
import React, { useState } from 'react'
import { AiFillCloseCircle, AiFillPlusCircle } from 'react-icons/ai'
const AddModal = ({ open,setOpen, propertiesList, setpropertiesList ,newAddedPropertyIndex}) => {

    const [newLink, setNewLink] = useState(false)
    const [newAction, setNewAction] = useState(false)

    const [link, setlink] = useState("")
    const [action, setAction] = useState("")

    const addLinkHandler = (e) => {
        e.preventDefault()
        setpropertiesList(previousState=>{
            return previousState?.map((item,index)=>{
                return index === newAddedPropertyIndex ? {...item,nav_links:item?.nav_links ? [...item.nav_links,{label:link}] : [{label:link}]} : item
            })
        })
        setNewLink(false)
    }

    const addActionHandler = (e) => {
        e.preventDefault()
        // setLinkList([...linkList, link])
        setpropertiesList(previousState=>{
            return previousState?.map((item,index)=>{
                return index === newAddedPropertyIndex ? {...item,actions:item?.actions ? [...item.actions,{label:action}] : [{label:action}]} : item
            })
        })

        // setpropertiesList({ ...propertiesList, actionList: propertiesList?.actionList ? [...propertiesList?.actionList, action] : [action] })
        setNewAction(false)
    }

    return (
        <div className={` absolute ${!open && 'hidden'} h-screen w-screen top-0 bottom-0 z-30 grid place-items-center`}>
            <div className='p-0 m-0 top-0 bottom-0 h-screen w-full bg-black opacity-60  z-40' />
            <div className='absolute bg-white dark:bg-primary dark:text-white w-96 h-auto rounded-lg z-50 p-4 '>
                <div className='flex justify-between'>
                    <h1 className='text-lg font-bold'>Properties</h1>
                    {/* <button className='bg-transparent rounded-full group' onClick={() => setOpen(false)}>
                        <AiFillCloseCircle size={20} className='group-hover:text-red-600 text-gray-400' />
                    </button> */}
                </div>
                <div className='p-4 mt-2'>
                    <div class="md:flex-col md:flex md:items-start mb-6 gap-5">
                        <div className='flex flex-row justify-between w-full items-center'>
                            <p className='text-lg'>Links</p>
                            <AiFillPlusCircle size={20} className='hover:text-green-600 text-gray-400'
                                onClick={() => setNewLink(true)}
                            />
                        </div>
                        <div className='w-full'>
                            <ol className='list-disc'>
                                {propertiesList[newAddedPropertyIndex]?.nav_links?.map(link => (
                                    <li className='flex flex-row justify-between text-blue-400'><span className='underline'>
                                        {link?.label}
                                    </span>
                                        <button type='submit' className=" border bg-red-600 flex justify-center items-center pl-5 pr-5 rounded-lg"
                                        >
                                            <p className=" text-white">Delete</p>
                                        </button>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        {newLink && (
                            <div>
                                <form onSubmit={addLinkHandler}>
                                    <div class="flex flex-row mb-6 gap-2 justify-between">
                                        <div class="w-full">
                                            <input class="font-light dark:bg-gray-700 bg-gray-100 appearance-none border-2 dark:border-gray-700 dark:text-white border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Link Label'
                                                onChange={e => setlink(e.target.value)}
                                            />
                                        </div>

                                        <div className='flex flex-row gap-2'>
                                            <button type='submit' className=" border bg-green-300 flex justify-center items-center pl-5 pr-5   w-full rounded-lg"

                                            >
                                                <p className=" text-gray-500">Add</p>
                                            </button>
                                            <button className=" border bg-gray-300 flex justify-center items-center pl-5 pr-5   w-full rounded-lg"
                                                onClick={() => setNewLink(false)}
                                            >
                                                <p className=" text-gray-500 ">Cancel</p>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                    <div class="md:flex-col md:flex md:items-start mb-6 gap-5">
                        <div className='flex flex-row justify-between w-full items-center'>
                            <p className='text-lg'>Action Button</p>
                            <AiFillPlusCircle size={20} className='hover:text-green-600 text-gray-400'
                                onClick={() => setNewAction(true)}
                            />
                        </div>
                        <div className='w-full'>
                            <ol className='list-disc'>
                                {propertiesList[newAddedPropertyIndex]?.actions?.map(link => (
                                    <li className='flex flex-row justify-between text-blue-400'><span className='underline'>
                                        {link?.label}
                                    </span>
                                        <button type='submit' className=" border bg-red-600 flex justify-center items-center pl-5 pr-5 rounded-lg"
                                        >
                                            <p className=" text-white">Delete</p>
                                        </button>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        {newAction && (
                            <div>
                                <form onSubmit={addActionHandler}>
                                    <div class="flex flex-row mb-6 gap-2 justify-between">
                                        <div class="w-full">
                                            <input class="font-light dark:bg-gray-700 bg-gray-100 appearance-none border-2 dark:border-gray-700 dark:text-white border-gray-100 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Link Label'
                                                onChange={e => setAction(e.target.value)}
                                            />
                                        </div>

                                        <div className='flex flex-row gap-2'>
                                            <button type='submit' className=" border bg-green-300 flex justify-center items-center pl-5 pr-5   w-full rounded-lg"

                                            >
                                                <p className=" text-gray-500">Add</p>
                                            </button>
                                            <button className=" border bg-gray-300 flex justify-center items-center pl-5 pr-5   w-full rounded-lg"
                                                onClick={() => setNewAction(false)}
                                            >
                                                <p className=" text-gray-500 ">Cancel</p>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            <button type='submit' className=" border bg-blue-600 flex justify-center items-center p-2 rounded-lg float-right"
            onClick={()=>{setOpen(false)}}
            >
                <p className=" text-white">Add Component</p>
            </button>
            </div>

        </div>
    )
}

export default AddModal