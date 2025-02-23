import React from "react";
import {
  BsGrid,
  BsCheckCircle,
  BsArrowRepeat,
  BsExclamationTriangle,
  BsPerson,
} from "react-icons/bs";

const summaryData = [
  {
    id: 1,
    icon: <BsGrid className="text-[#00ffcc] mb-3 text-xl" />,
    count: 5,
    label: "Total Projects",
    bgColor: "bg-white",
    textColor: "text-gray-500",
  },
  {
    id: 2,
    icon: <BsCheckCircle className="text-[#00ffcc] mb-3 text-xl" />,
    count: 1,
    label: "Completed",
    bgColor: "bg-white",
    textColor: "text-gray-500",
  },
  {
    id: 3,
    icon: <BsArrowRepeat className="text-[#00ffcc] mb-3 text-xl" />,
    count: 3,
    label: "Ongoing",
    bgColor: "bg-white",
    textColor: "text-gray-500",
  },
  {
    id: 4,
    icon: <BsExclamationTriangle className="text-red-500 mb-3 text-xl" />,
    count: 1,
    label: "Delayed",
    bgColor: "bg-red-50",
    textColor: "text-red-500",
  },
  {
    id: 5,
    icon: <BsPerson className="text-[#00ffcc] mb-3 text-xl" />,
    count: 5,
    label: "Employees",
    bgColor: "bg-white",
    textColor: "text-gray-500",
  },
];

const SummaryCard = ({ icon, count, label, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} p-8 rounded-xl shadow-sm`}>
      {icon}
      <div className="flex flex-col items-center">
        <div className={`text-4xl font-bold mb-1 ${textColor}`}>{count}</div>
        <div className={`${textColor} text-sm`}>{label}</div>
      </div>
    </div>
  );
};

const ProjectsSummary = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
      {summaryData.map((item) => (
        <SummaryCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProjectsSummary;
