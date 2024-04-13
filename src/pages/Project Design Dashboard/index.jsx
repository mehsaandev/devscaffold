import React, { useState } from "react";
import Sidebar from "./Sidebar/index";
import PageDesign from "./Pages Section/Index";
import Navbar from "../Navbar";
// import ComponentsSection from "./ComponentsSection";
import ToolboxSection from "./Pages Section/Toolbox Section/ToolboxSection";
import PagesSection from "./Sidebar/PageSection/Index";
import RoutingSection from './Routing Section/index'
import ExportSection from './Export Section/Index'
import AddModal from "./Modals/AddModal";
import { Navigate, Route, Routes } from "react-router-dom";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";


const ProjectDesignDashboard = ({ toggleTheme, theme }) => {
  const [activeElement, setActiveElement] = useState(document.activeElement);

  const activeClassHandler = () => {
    console.log("Hello");
    setActiveElement(document.activeElement);
  };

  // console.log(activeElement)

  return (
    // bg-gradient-to-br from-dimWhite to-slate-200
    <>
      {/* <AddModal open={true} /> */}
      <div className="dark:bg-gradient-to-br dark:to-primary dark:from-gray-800 h-screen w-full">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <PanelGroup direction="horizontal" className="w-full">
          <div className="flex flex-row w-full">
            <Sidebar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* <PagesSection activeClassHandler={activeClassHandler} /> */}
                    <Navigate to={'page'} />
                  </>

                }
              />

              {/* <Route path="/page" element={

            } /> */}
              <Route path="/page/*" element={
                <>
                  <PanelGroup   direction="horizontal" className="w-full overflow-auto">
                    <Panel  collapsible={false} collapsedSize={6} minSize={13} defaultSize={20} maxSize={40} >
                      <PagesSection activeClassHandler={activeClassHandler} />
                    </Panel>
                    <PanelResizeHandle />
                    <Panel style={{overflow:'auto'}}>
                      <PageDesign />
                    </Panel>
                  </PanelGroup>
                </>

              } />

              <Route path="/routes" element={
                <RoutingSection />
              } />
              <Route path="/export" element={
                <ExportSection />
              } />
            </Routes>

          </div>
        </PanelGroup>

      </div>
    </>
  );
};

export default ProjectDesignDashboard;
