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
import { Route, Routes } from "react-router-dom";


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
      <div className="  dark:bg-gradient-to-br dark:to-primary dark:from-gray-800 h-screen">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <div className="flex flex-row">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={<PagesSection activeClassHandler={activeClassHandler} />}
            />

            <Route path="/page" element={
              <PageDesign activeClassHandler={activeClassHandler} />

            } />
            <Route path="/routes" element={
                <RoutingSection />
            } />
            <Route path="/export" element={
                <ExportSection />
            } />

          </Routes>
          <div className="grid grid-cols-12 grid-flow-col w-full">
            <div className="col-span-12">
              <PageDesign activeClassHandler={activeClassHandler} />
            </div>
            <div className="col-span-3">
              <ToolboxSection activeElement={activeElement} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDesignDashboard;
