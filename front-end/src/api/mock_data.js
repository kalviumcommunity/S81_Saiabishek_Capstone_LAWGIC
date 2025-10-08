const mockData = {
  clientProblems: [
    {
      id: "prob1",
      title: "Landlord Refusing to Return Deposit",
      description: "My landlord is refusing to return my security deposit after I moved out, despite the apartment being in perfect condition. I have photographic evidence and a copy of the lease agreement.",
      category: "Property Law",
      status: "Open",
      date: "2025-09-20",
    },
    {
      id: "prob2",
      title: "Dispute over Property Inheritance",
      description: "My sibling and I are in a dispute over the inheritance of our father's property. The will is unclear, and we can't come to an agreement.",
      category: "Family Law",
      status: "In Progress",
      date: "2025-09-18",
    },
  ],
};

// Use the existing clientProblems array to build allProblems
mockData.allProblems = [
  {
    id: "prob3",
    title: "Drafting a Partnership Agreement",
    description: "I need a lawyer to help draft a new partnership agreement for my startup. We need to define roles, responsibilities, and equity distribution clearly.",
    category: "Corporate Law",
    date: "2025-09-24",
  },
  {
    id: "prob4",
    title: "False Accusation of Theft",
    description: "I have been falsely accused of theft by my neighbor. I need a criminal defense lawyer to help me clear my name and understand my legal rights.",
    category: "Criminal Law",
    date: "2025-09-23",
  },
  ...mockData.clientProblems,
];

mockData.lawyers = [
  {
    id: "lawyer1",
    name: "Anjali Sharma",
    specialization: "Family Law",
    location: "Delhi",
    rating: 4.8,
    reviews: 55,
    approved: false, // <-- added for pending logic
    bio: "Experienced in all aspects of family law, including divorce, child custody, and adoption. Dedicated to providing compassionate legal counsel.",
    profilePic: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "lawyer2",
    name: "Rahul Singh",
    specialization: "Corporate Law",
    location: "Mumbai",
    rating: 4.9,
    reviews: 82,
    approved: true, // <-- added for pending logic
    bio: "Specializing in corporate mergers, acquisitions, and drafting business contracts. Helping businesses navigate the legal landscape.",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

export default mockData;
