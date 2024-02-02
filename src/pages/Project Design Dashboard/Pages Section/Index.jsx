import React, { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import 'grapesjs/dist/css/grapes.min.css';
import { v4 as uuid } from 'uuid';
import AddModal from "../Modals/AddModal";
import PropertiesModal from "../Modals/PropertiesModal";
import { useDispatch, useSelector } from "react-redux";
import { exportComponents } from "../../../actions/project";
import { compileTree } from "../../../utilities/componentCompiler";
import { changeColor } from "../../../../redux/colors/colorsSlice"
import PreviewSection from "./PreviewSection";
import SwitchSection from "./SwitchSection";
import DesignSection from "./DesignSection";
import GrapesLayout from "./GrapesLayout";

const elementsTree = [
    {
        id: uuid(),
        name: "div",
        chilldren: [
            {
                id: uuid(),
                name: "div",
                chilldren: [
                    {
                        id: uuid(),
                        name: "button",
                        properties: {
                            text: "Login",
                        },
                        classes: "bg-green-600 w-96 text-white p-2 rounded-lg hover:bg-green-700 focus:border-4 focus:border-yellow-600",
                    }
                ],
                classes: "p-10",

            },
            {
                id: uuid(),
                name: "div",
                chilldren: [
                    {
                        id: uuid(),
                        name: "button",
                        properties: {
                            text: "Login",
                        },
                        classes: "bg-yellow-600 w-96 text-white p-2 rounded-lg hover:bg-yellow-700 focus:border-4 focus:border-yellow-600",
                    }
                ],
                classes: "p-10",

            },
        ],
        classes: "m-10 w-full",

    }]





function App({ activeClassHandler }) {
    // const [columns, setColumns] = useState(columnsFromBackend);
    const pageObj = useSelector(state => state.pageDesign.page)

    const dispatch = useDispatch()
    const [componentsArray, setComponentsArray] = useState([])
    const [model, setModel] = useState(false)
    const [propertiesModal, setPropertiesModal] = useState(false)
    const [propertiesList, setpropertiesList] = useState([])
    const [newAddedPropertyIndex, setNewAddedPropertyIndex] = useState(0)

    const [togglePreview, setTogglePreview] = useState(false)



    const handleModelClose = () => {
        setModel(false)
        setNewAddedPropertyIndex(propertiesList?.length)
        setPropertiesModal(true)
    }





    const setActiveEdit = () => {
        setTogglePreview(false)
    }

    const setActivePreview = () => {
        setTogglePreview(true)
    }


    // console.log(compileTree(pageObj))





    return (
        <div className="bg-[#E1E1E1] overflow">
            <AddModal open={model} setOpen={setModel} handleModelClose={handleModelClose} setpropertiesList={setpropertiesList} />
            <PropertiesModal open={propertiesModal} newAddedPropertyIndex={newAddedPropertyIndex} setOpen={setPropertiesModal} propertiesList={propertiesList} setpropertiesList={setpropertiesList} />

            <SwitchSection togglePreview={togglePreview} setActiveEdit={setActiveEdit} setActivePreview={setActivePreview} />

            {togglePreview ? (
                // <GrapesLayout />
                <PreviewSection />
                ) : (
                    <DesignSection />
            )}

           
        </div>
    );
}

export default App;
