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
import ToolboxSection from "./Toolbox Section/ToolboxSection";
import { Route, Routes, useParams } from "react-router-dom";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useEffect } from "react";
import { getPage } from "../../../actions/pages";

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
    const pageObj = useSelector(state => state.page)

    const dispatch = useDispatch()
    const [componentsArray, setComponentsArray] = useState([])
    const [model, setModel] = useState(false)
    const [propertiesModal, setPropertiesModal] = useState(false)
    const [propertiesList, setpropertiesList] = useState([])
    const [newAddedPropertyIndex, setNewAddedPropertyIndex] = useState(0)
    const [loading, setLoading] = useState(false)

    const [togglePreview, setTogglePreview] = useState(0)



    const handleModelClose = () => {
        setModel(false)
        setNewAddedPropertyIndex(propertiesList?.length)
        setPropertiesModal(true)
    }





    const setPreview = (num) => {
        setTogglePreview(num)
    }

    const params = useParams()

    useEffect(() => {
        console.log(params['*'])
        const pageId = params['*']
        getPage(dispatch, pageId, setLoading)

    }, [document.location.pathname])



    // console.log(compileTree(pageObj))


    const ActualDesignSection = () => {
        return (
            <div className="grid grid-cols-12 grid-flow-col w-full">
                {/* <PanelGroup direction="horizontal" className="">
                    <Panel> */}
                <div className="col-span-9">
                    <SwitchSection togglePreview={togglePreview} setPreview={setPreview} />
                    {togglePreview == 0 ? (
                        <PreviewSection />
                    ) : togglePreview === 1 ? (
                        <DesignSection />
                    ) : togglePreview == 2 && (
                        <GrapesLayout loading={loading} />
                    )}

                </div>
                {/* </Panel> */}
                {/* <PanelResizeHandle /> */}

                {/* <Panel minSize={20} defaultSize={29} maxSize={50}> */}
                <div className="col-span-3">
                    <ToolboxSection />
                </div>
                {/* </Panel>
                </PanelGroup> */}
            </div>
        )
    }





    return (
        <div className="bg-[#E1E1E1] overflow w-full">

            <AddModal open={model} setOpen={setModel} handleModelClose={handleModelClose} setpropertiesList={setpropertiesList} />
            <PropertiesModal open={propertiesModal} newAddedPropertyIndex={newAddedPropertyIndex} setOpen={setPropertiesModal} propertiesList={propertiesList} setpropertiesList={setpropertiesList} />

            <Routes>
                <Route path="/" element={<p>Empty</p>} />
                <Route path="/:pageId/" element={<ActualDesignSection />} />
            </Routes>





        </div>
    );
}

export default App;
