import { useState } from "react";

import { BsGrid, BsDownload, BsFilter } from "react-icons/bs";
import Navbar from "./Components/Navbar";
import ProjectsSummary from "./Components/ProjectsSummary";
import Charts from "./Components/Charts";
import Projects from "./Components/Projects";
import TeamMood from "./Components/Teams";

const emojis = ["😊", "😄", "😃", "😅", "😉"];

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fd]">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className=" mx-auto p-8">
        {/* Stats Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:w-[80%]">
            <ProjectsSummary />
            <Charts />
          </div>
          <div className="w-full lg:w-[20%]">
            <TeamMood />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
                <h2 className="text-xl font-semibold">Budget status</h2>
                <div className="flex flex-wrap gap-3">
                  <button className=" px-4 py-2 rounded-lg font-medium hover:bg-[#00e6b8]">
                    + Add New Project
                  </button>
                  <button className="border border-gray-200 px-4 py-2 rounded-lg text-gray-600 font-medium flex items-center space-x-2 hover:bg-gray-50">
                    <BsDownload className="text-gray-500" />
                    <span>Download report</span>
                  </button>
                  <button className="border border-gray-200 px-4 py-2 rounded-lg text-gray-600 font-medium flex items-center space-x-2 hover:bg-gray-50">
                    <BsFilter className="text-gray-500" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Projects />
      </main>
    </div>
  );
}

export default App;
