import { TextField, Button, ButtonGroup, Box, Tabs, Tab, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { updatePage } from '../../actions/pages'
import { useSelector } from 'react-redux'
import { updateElementClasses, generateHTML, compileTree, htmlToJSON, compileJSON } from '../../../../utilities/componentCompiler'
import { createComponent } from '../../../../utilities/attatchmentUtility'
import JSZip from 'jszip'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import BrushIcon from '@mui/icons-material/Brush';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

const ToolboxSection = ({ activeElement }) => {
  // const [elementClass, setElementClass] = useState(activeElement.className)
  const dispatch = useDispatch()

  const pageObj = useSelector(state => state.pageDesign.page)
  // const pagesObj = useSelector(state => state.page)
  // console.log(activeElement)
  // console.log(elementClass)

  // console.log(pagesObj)



  useEffect(() => {

    // setElementClass(activeElement.className)
  }, [])

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

    // for (let index = 0; index < pagesObj.length; index++) {
    //   console.log(pagesObj[index])
    // }

    var temp1 = compileTree(pageObj?.content);

    console.log(pageObj)
    console.log(temp1)

    // Create the JSZip instance
    var zip = new JSZip();

    // Create and add the content of the first file to the zip archive
    var content1 = createComponent(`${pageObj?.name}`, temp1);
    zip.file(`${pageObj?.name}.jsx`, content1);

    // Create and add the content of the second file to the zip archive
    // var content2 = createComponent("Button2", temp2);
    // zip.file("Button2.jsx", content2);

    // Generate a blob containing the zip archive
    zip.generateAsync({ type: "blob" }).then(function (blob) {
      // Create a hidden link and set the href to the blob URL
      var a = document.createElement("a");
      a.style.display = "none";
      a.href = URL.createObjectURL(blob);
      a.download = "App.zip";

      // Trigger a click event to download the zip file
      a.click();

      // Clean up by revoking the blob URL
      URL.revokeObjectURL(a.href);
    });
  }


  const updateClassHandler = () => {


    // const updatedJson = updateElementClasses(pageObj, activeElement?.id, elementClass)
    const html = document.getElementById("gjs").innerHTML
    // const updatedJson = htmlToJSON(jsonObj)
    // console.log(updatedJson)
    // console.log(html)
    // document.getElementById("gjs").innerHTML = html
    // dispatch(updatePage(updatedJson))
    const jsonOb = compileJSON(html)
    const newHtml = generateHTML(jsonOb)
    console.log(newHtml)




  }

  useEffect(() => {
    // setElementClass(activeElement.className)
  }, [])



  const [value, setValue] = useState(1);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  // document.getElementById('blocks').innerHTML

  useEffect(() => {
    const blocks = document?.getElementById('blocks')
    const stylesContainer = document?.getElementById('styles-container')
    console.log(blocks)
    const blockChild = blocks?.getElementsByTagName('div')
    const stylesContainerChild = stylesContainer?.getElementsByTagName('div')
    if (blockChild.length > 0)
      blockChild[0].style.display = 'none'
    if (stylesContainerChild.length > 0)
      stylesContainerChild[0].style.display = 'none'




  }, [])



  return (
    <div className='m-2 p-5 bg-white flex flex-col gap-5 h-full '>
      <ButtonGroup variant="contained" aria-label="Basic button group" color='inherit' style={{ boxShadow: 'none' }}
        className='flex w-full justify-around'
      >
        <IconButton aria-label="Blocks" onClick={() => handleChange(1)} >
          <LayersIcon style={{ fontSize: '30px' }} />
        </IconButton>
        <IconButton aria-label="Style" onClick={() => handleChange(2)} >
          <BrushIcon style={{ fontSize: '30px' }} />
        </IconButton>
        <IconButton aria-label="Style" onClick={() => handleChange(3)} >
          <SystemUpdateAltIcon style={{ fontSize: '30px' }} />
        </IconButton>
      </ButtonGroup>
      {/* <Box sx={{ bgcolor: 'ButtonShadow' }}>
        <Tabs value={value} onChange={handleChange}  aria-label="icon tabs example" variant="scrollable">
        <Tab style={{width: '10'}} icon={<DashboardIcon />} aria-label="phone" label="Layouts"  value={0} />
        <Tab icon={<HomeRepairServiceIcon />} aria-label="phone" label="Components" className='text-sm' value={1}  />
        <Tab icon={<DashboardIcon />} aria-label="phone" value={2} />
      </Tabs>
      </Box> */}


      <div id="blocks" className={`${value != 1 && 'hidden'}`}></div>
      <div id="styles-container" className={`${value != 2 && 'hidden'}`}></div>
      {value === 3 && (
        <>
          {/* <Button variant="contained" onClick={updateClassHandler}>Save Project</Button> */}
          <Button variant="contained" onClick={createZipFile}>Export Component</Button>
        </>
      )}


    </div>
  )
}

export default ToolboxSection