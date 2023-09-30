import React, { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import AddModal from "../Modals/AddModal";
import PropertiesModal from "../Modals/PropertiesModal";

import { useDispatch } from "react-redux";
import { exportComponents } from "../../../actions/project";
import { compileTree } from "../../../utilities/componentCompiler";


const elementsTree = [{
  name: "div",
  chilldren: [
    {
      name: "div",
      chilldren: [
        {
          name: "button",
          properties: {
            text: "Login",
          },
          classes: "bg-red-600 w-96 text-white p-2 rounded-lg hover:bg-red-700",
        }
      ],
      classes: "p-10",

    },
  ],
  classes: "m-10 w-full",

}]






function App() {
  // const [columns, setColumns] = useState(columnsFromBackend);

  const dispatch = useDispatch()
  const [componentsArray, setComponentsArray] = useState([])
  const [model, setModel] = useState(false)
  const [propertiesModal, setPropertiesModal] = useState(false)
  const [propertiesList, setpropertiesList] = useState([])
  const [newAddedPropertyIndex, setNewAddedPropertyIndex] = useState(0)

  console.log(propertiesList)
  console.log(newAddedPropertyIndex)

  const handleModelClose = () => {
    setModel(false)
    setNewAddedPropertyIndex(propertiesList?.length)
    setPropertiesModal(true)
  }



  console.log(compileTree(elementsTree) + "")



  const exportComponent = () => {
    dispatch(exportComponents(propertiesList))
  }



  const AddBar = () => {
    return (
      // <button className="h-16 border border-dashed flex justify-center items-center  border-black  dark:border-white w-full rounded-lg"
      //   onClick={() => setModel(true)}
      // >
      //   <p className="text-2xl  text-gray-500">+</p>
      // </button>
      <div dangerouslySetInnerHTML={{ __html: compileTree(elementsTree) }}>

      </div>
    )
  }

  return (
    <>
      <AddModal open={model} setOpen={setModel} handleModelClose={handleModelClose} setpropertiesList={setpropertiesList} />
      <PropertiesModal open={propertiesModal} newAddedPropertyIndex={newAddedPropertyIndex} setOpen={setPropertiesModal} propertiesList={propertiesList} setpropertiesList={setpropertiesList} />
      <div className="w-full h-screen p-10 flex flex-col justify-between" >
        <div className="flex flex-col items-center  gap-5">
          {propertiesList.length === 0 ?
            (
              <AddBar />
            )
            : (
              <>
                {propertiesList?.map(component => (
                  <>
                    <button className="h-16 border flex justify-center items-center  border-black w-full rounded-lg">
                      <p className="text-2xl  text-gray-500">{component?.name}</p>
                    </button>
                  </>
                ))}
                <AddBar />
              </>
            )}
        </div>
        <button className="h-16 bg-blue-600 flex justify-center items-center w-full rounded-lg" onClick={exportComponent}>
          <p className="text-white">Export</p>
        </button>
      </div>
    </>
  );
}

export default App;
