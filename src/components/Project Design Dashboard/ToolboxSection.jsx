import { TextField ,Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {updatePage} from '../../actions/pages'
import { useSelector } from 'react-redux'
import { updateElementClasses } from '../../utilities/componentCompiler'

const ToolboxSection = ({activeElement}) => {
  const [elementClass, setElementClass] = useState(activeElement.className)
  const dispatch  = useDispatch()

  const pageObj =  useSelector(state => state.pageDesign.page)
  console.log(activeElement)
  console.log(elementClass)

  useEffect(() => {
    
  setElementClass(activeElement.className)
  }, [activeElement])
  


  const updateClassHandler = () => {

    const updatedJson = updateElementClasses(pageObj,activeElement?.id,elementClass)
    dispatch(updatePage(updatedJson))

   
  }

  useEffect(() => {
    setElementClass(activeElement.className)
  }, [])
  

  

  


  return (
    <div className='m-2 p-5 bg-white flex flex-col gap-5'>
      

         <TextField
          id="outlined-multiline-static"
          label="Classes"
          fullWidth
          multiline
          rows={4}
          defaultValue={"Classes"}
          value={ elementClass ? elementClass : activeElement.className}
          onChange={(e) => setElementClass(e.target.value)}
        />
    
        <Button variant="contained" onClick={updateClassHandler}>Update Class</Button>
    </div>
  )
}

export default ToolboxSection