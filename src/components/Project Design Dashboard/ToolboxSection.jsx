import { TextField, Button, ButtonGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { updatePage } from '../../actions/pages'
import { useSelector } from 'react-redux'
import { updateElementClasses,generateHTML, compileTree } from '../../utilities/componentCompiler'
import {createComponent} from '../../utilities/attatchmentUtility'
import JSZip from 'jszip'

const ToolboxSection = ({ activeElement }) => {
  const [elementClass, setElementClass] = useState(activeElement.className)
  const dispatch = useDispatch()

  const pageObj = useSelector(state => state.pageDesign.page)
  // console.log(activeElement)
  // console.log(elementClass)

  useEffect(() => {

    setElementClass(activeElement.className)
  }, [activeElement])
  
  /////
  // function createFile(){
  //   //create or obtain the file's content
  //   var temp = compileTree(pageObj)
  //   console.log(temp)
  //   var content = createComponent("Button",temp);
  
  //   //create a file and put the content, name and type
  //   var file = new File(["\ufeff"+content], 'Button.jsx', {type: "text/plain:charset=UTF-8"});
  
  //   //create a ObjectURL in order to download the created file
  //   var url = window.URL.createObjectURL(file);
  
  //   //create a hidden link and set the href and click it
  //   var a = document.createElement("a");
  //   a.style = "display: none";
  //   a.href = url;
  //   a.download = file.name;
  //   a.click();
  //   window.URL.revokeObjectURL(url);
  // } 

function createZipFile() {
  // Create or obtain the file's content
  var temp1 = compileTree(pageObj);
  var temp2 = compileTree(pageObj);

  // Create the JSZip instance
  var zip = new JSZip();

  // Create and add the content of the first file to the zip archive
  var content1 = createComponent("Button1", temp1);
  zip.file("Button1.jsx", content1);

  // Create and add the content of the second file to the zip archive
  var content2 = createComponent("Button2", temp2);
  zip.file("Button2.jsx", content2);

  // Generate a blob containing the zip archive
  zip.generateAsync({ type: "blob" }).then(function (blob) {
    // Create a hidden link and set the href to the blob URL
    var a = document.createElement("a");
    a.style.display = "none";
    a.href = URL.createObjectURL(blob);
    a.download = "TwoButtons.zip";
    
    // Trigger a click event to download the zip file
    a.click();
    
    // Clean up by revoking the blob URL
    URL.revokeObjectURL(a.href);
  });
}


  const updateClassHandler = () => {

    const updatedJson = updateElementClasses(pageObj, activeElement?.id, elementClass)
    // dispatch(updatePage(updatedJson))


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
    {/*  */}
        <Button variant="contained" >Update Class</Button>
        <Button variant="contained" onClick={createZipFile}>Export Component</Button>

      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>


      <TextField
        id="outlined-multiline-static"
        label="Classes"
        fullWidth
        multiline
        rows={4}
        defaultValue={"Classes"}
        value={elementClass ? elementClass : activeElement.className}
        onChange={(e) => setElementClass(e.target.value)}
      />

      <Button variant="contained" onClick={updateClassHandler}>Update Class</Button>
    </div>
  )
}

export default ToolboxSection