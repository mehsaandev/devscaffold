import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPagesOfProjectAPIHandler } from '../../../actions/pages'
import { getSingleProject } from '../../../actions/project'
import { Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material'
import { compileTree } from '../../../utilities/componentCompiler'
import JSZip from 'jszip'
import { createComponent } from '../../../utilities/attatchmentUtility'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


const ExportSection = () => {

  const pageObj = useSelector(state => state.page)
  const projectObj = useSelector(state => state?.projects?.project)
  const params = useParams()
  const dispatch = useDispatch()

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  useEffect(() => {

    dispatch(getPagesOfProjectAPIHandler(params.projectId))
    dispatch(getSingleProject(params.projectId))

  }, [])



  const exportReactApp = () => {
    // Create or obtain the file's content

    // for (let index = 0; index < pagesObj.length; index++) {
    //   console.log(pagesObj[index])
    // }

    var zip = new JSZip();
    for (let index = 0; index < pageObj.length; index++) {

      var jsxString = compileTree(pageObj[index]?.content);
      var reactComponent = createComponent(`${pageObj[index]?.name}`, jsxString);
      zip.file(`src/${pageObj[index]?.name}.jsx`, reactComponent);

    }



    // Create the JSZip instance

    // Create and add the content of the first file to the zip archive

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
    })
  }


  console.log(pageObj)
  console.log(projectObj)

  return (
    <div class="bg-slate-200 w-screen flex justify-center h-full p-5">
      <div class="bg-white rounded-lg w-1/2  h-full p-8">
        <p class="font-sans font-bold text-2xl "> Export Project</p>

        <div className='text-gray-700'>
          <div className='flex flex-row justify-center items-center mt-5 gap-10'>
            {/* <span class=" font-normal text-2xl uppercase ">Project Name:</span> */}
            <span class=" font-thin  text-3xl uppercase p-3  ">Project Title: </span>
            <span class=" font-thin text-blue-500 text-3xl uppercase p-3 bg-slate-200 rounded-xl ">{projectObj?.title}</span>
          </div>



          <div className='flex flex-row justify-around  items-center mt-10 gap-10'>
            <div className=''>
              <p class=" font-normal text-xl ">Select Project Pages</p>
            </div>
            <div>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Select Pages</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Select Pages" />}
                  renderValue={(selected) => `Selected Pages: ${selected.length}`}
                  MenuProps={MenuProps}
                >
                  {pageObj && pageObj.map((page) => (
                    <MenuItem key={page?.name} value={page?.name}>
                      <Checkbox checked={personName.indexOf(page?.name) > -1} />
                      <ListItemText primary={page?.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className='text-center mt-10'>
            <Button variant='contained' onClick={exportReactApp}>Export React App</Button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default ExportSection