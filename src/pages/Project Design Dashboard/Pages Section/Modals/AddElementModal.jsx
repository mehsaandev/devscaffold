import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import {addNewElement} from '../../../../utilities/componentCompiler'
import { tagMapHandler, tagsWithProperties, textBasedTags } from '../../../../utilities/tagsUtility'
import {updatePage} from '../../../../actions/pages'
import { Autocomplete, Dialog, DialogActions, DialogContent, DialogTitle, Paper, TextField,Box,Button ,Typography} from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

export default function BasicModal({ open, handleClose, elementData }) {

  const dispatch = useDispatch()
  const pageObj = useSelector(state => state.page)
  const [selectedElement, setSelectedElement] = useState(null)
  const [newElement, setNewElement] = useState(null)
  const [scroll, setScroll] = useState('paper')
  useEffect(() => {
    setSelectedElement(null)
    setNewElement(null)
  }, [open])


  const handleChangeValues = (e, type) => {
    // console.log(selectedElement?.tag)
    // setNewElement({ ...newElement, name: selectedElement?.tag })
    if (type == 'classes')
      setNewElement({ ...newElement, classes: e.target.value })
    // if (type == 'id')
    //   setNewElement({ ...newElement, id: e.target.value })
    if (type == 'properties')
      setNewElement({ ...newElement, properties: { ...newElement?.properties, [e.target.name]: e.target.value } })


  }


  const handleAddElement = () => {
    // const updatedElement = { ...elementData, children: [...elementData.children,newElement] }
    console.log({...newElement,name:selectedElement?.tag,id:uuid(),children:[] })
    const response = addNewElement(pageObj,elementData.id,{...newElement,name:selectedElement?.tag,id:uuid(),children:[] })
    dispatch(updatePage(response))
    console.log(response)
  }


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={scroll}
      fullWidth
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add New Element
        </Typography>
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        {/* <Box sx={style} > */}

        <div >

          <div>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="h2">
              <div className='flex items-center justify-around'>
                <h1 className='mb-2'>Select Element</h1>
                <Autocomplete
                  id="country-select-demo"
                  sx={{ width: 300 }}
                  options={tagsWithProperties}
                  onChange={(event, newValue) => { setSelectedElement(newValue) }}
                  autoHighlight
                  getOptionLabel={(option) => option.tag}
                  renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                      {/* <img
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt=""
                  /> */}
                      {
                        option.tag == "h1" ? <h1 className='text-2xl font-bold'> {tagMapHandler(option.tag)}</h1> :
                          option.tag == "h2" ? <h2 className='text-xl font-bold'> {tagMapHandler(option.tag)}</h2> :
                            option.tag == "h3" ? <h3 className='text-lg font-bold'> {tagMapHandler(option.tag)}</h3> :
                              option.tag == "h4" ? <h4 className='text-base font-bold'> {tagMapHandler(option.tag)}</h4> :
                                option.tag == "h5" ? <h5 className='text-sm font-bold'> {tagMapHandler(option.tag)}</h5> :
                                  option.tag == "h6" ? <h6 className='text-xs font-bold'> {tagMapHandler(option.tag)}</h6> :
                                    option.tag == "button" ? <Button variant='contained'> {tagMapHandler(option.tag)}</Button> :
                                      tagMapHandler(option.tag)

                      }
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Element"
                      placeholder='Search Element...'
                      inputProps={{
                        ...params.inputProps,
                        // autoComplete: 'new-password', // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </div>

              <h1 className='mt-2'>Parent Element: <span className='font-bold text-green-700'>{tagMapHandler(elementData?.name)}</span></h1>
              {selectedElement && (
                <h1 className='mt-2'>Selected Element: <span className='font-bold text-green-700'>{tagMapHandler(selectedElement?.tag)}</span></h1>
              )}
              <div className='bg-gray-500 w-full opacity-40 h-[0.1px] my-4' />
              {selectedElement && (
                <>
                  <h1 className='mt-2'>Add Properties of <b>{selectedElement?.tag}</b> tag</h1>

                  {/* {selectedElement?.properties?.length > 0 &&( */}
                  <>
                    <h1 className='mt-2'>Element Properties</h1>
                    <Paper elevation={1} color='black' className='m-2 p-2' variant='outlined'>
                      <div>
                        <p className=' uppercase'>ID</p>
                        <TextField multiline fullWidth type='text' name={'id'} onChange={(e) => handleChangeValues(e, 'id')} />
                      </div>
                      <div>
                        <p className=' uppercase'>Classes</p>
                        <TextField multiline fullWidth type='text' name={'classes'} onChange={(e) => handleChangeValues(e, 'classes')}  />
                      </div>
                      {selectedElement?.properties?.map((property, index) => {
                        return (
                          <div key={index} >
                            <p className=' uppercase'>{property?.name}</p>
                            <TextField multiline={property?.type == 'number' ? false : true} name={property?.name} fullWidth type={`${property?.type}`} onChange={(e) => handleChangeValues(e, 'properties')} />
                            {/* <p className='text-gray-700'>{selectedElement?.properties[key]}</p> */}
                          </div>
                        )
                      })}
                      {textBasedTags.includes(selectedElement?.tag) && (
                        <div>
                          <p className=' uppercase'>Text</p>
                          <TextField multiline fullWidth type='text' name={'text'} onChange={(e) => handleChangeValues(e, 'properties')}  />
                        </div>
                      )}
                    </Paper>
                  </>
                  {/* )} */}
                </>
              )}




            </Typography>
          </div>
        </div>

      </DialogContent>
      <DialogActions>
        <Button variant="contained" color='success' onClick={handleAddElement}>Add Element</Button>
      </DialogActions>

    </Dialog>
  );
}
