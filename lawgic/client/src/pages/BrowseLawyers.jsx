import React from 'react';

const BrowseLawyers = () => {
  const lawyers = [
    { name: "Adv. Rohan Mehta", specialization: "Criminal Law", location: "Delhi" },
    { name: "Adv. Priya Sharma", specialization: "Family Law", location: "Mumbai" },
  ];

  return (
    <div className="browse-lawyers">
      <h2>Featured Lawyers</h2>
      {lawyers.map((lawyer, index) => (
        <div key={index} className="lawyer-card">
          <h3>{lawyer.name}</h3>
          <p>Specialization: {lawyer.specialization}</p>
          <p>Location: {lawyer.location}</p>
        </div>
      ))}
    </div>
  );
};

export default BrowseLawyers;
