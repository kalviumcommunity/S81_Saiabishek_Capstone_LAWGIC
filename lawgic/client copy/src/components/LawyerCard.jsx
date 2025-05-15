import React from "react";

const LawyerCard = ({ lawyer }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition duration-300">
      <div className="flex items-center space-x-4">
        <img
          src={lawyer.avatar || "/default-avatar.png"}
          alt={lawyer.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{lawyer.name}</h2>
          <p className="text-gray-600">{lawyer.specialization}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p><strong>Experience:</strong> {lawyer.experience} years</p>
        <p><strong>Location:</strong> {lawyer.location}</p>
        <p className="mt-2 truncate">{lawyer.bio}</p>
      </div>
    </div>
  );
};

export default LawyerCard;
