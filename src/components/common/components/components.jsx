import React from 'react'

export const Component = ({name,setpropertiesList,setOpen,handleModelClose}) => {
    const componentsAddHandler = () =>{
        setpropertiesList((previos)=>{
            return [...previos,{name}]
        })
        handleModelClose()

    }
    return (
        <div className='w-full'>
            <button className='text-slate-700 bg-blue-300 w-full hover:bg-blue-400  rounded-lg p-2 text-sm ' 
            onClick={componentsAddHandler}
            >{name}</button>
        </div>
    )
}


export const Layout = ({name}) => {
    return (
        <div className='w-full'>
            <button disabled className='text-slate-700 bg-transparent border border-solid border-slate-500 w-full hover:bg-slate-100  rounded-lg p-2 text-sm '>{name}</button>
        </div>
    )
}



