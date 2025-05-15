import React from "react";

const ProblemCard = ({ problem }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{problem.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{problem.category} | {problem.location}</p>
      <p className="text-gray-700 line-clamp-3">{problem.description}</p>
      <div className="mt-4 text-xs text-gray-500">
        Posted by: {problem.postedByName} | {new Date(problem.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default ProblemCard;
