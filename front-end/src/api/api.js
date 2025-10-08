import mockData from './mock_data';

// Simulate API call with delay
const simulateApiCall = (data) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data });
    }, 500); // simulate network latency
  });
};

// Fetch client's problems
export const getClientProblems = async () => {
  console.log("API: Fetching client's problems...");
  return simulateApiCall(mockData.clientProblems);
};

// Fetch all problems
export const getAllProblems = async () => {
  console.log("API: Fetching all available problems...");
  return simulateApiCall(mockData.allProblems);
};

// Fetch lawyer profiles
export const getLawyerProfiles = async () => {
  console.log("API: Fetching lawyer profiles...");
  return simulateApiCall(mockData.lawyers);
};

// Fetch problem by ID
export const getProblemById = async (id) => {
  console.log(`API: Fetching problem with ID: ${id}`);
  const problem = mockData.allProblems.find(p => p.id === id);
  return simulateApiCall(problem);
};

// Post a new problem
export const postNewProblem = async (problemData) => {
  console.log("API: Posting new problem...", problemData);
  // In a real app, this would send a POST request
  return simulateApiCall({ success: true, message: "Problem posted successfully!" });
};

// ------------------ Admin Functions ------------------ //

// Get pending lawyers (not approved yet)
export const getPendingLawyers = async () => {
  console.log("API: Fetching pending lawyers...");
  const pending = mockData.lawyers.filter(l => !l.approved);
  return simulateApiCall(pending);
};

// Get system stats
export const getSystemStats = async () => {
  console.log("API: Fetching system stats...");
  const stats = {
    totalClients: 50, // example data
    totalLawyers: mockData.lawyers.length,
    totalProblems: mockData.allProblems.length,
    openProblems: mockData.allProblems.filter(p => p.status === 'Open').length,
  };
  return simulateApiCall(stats);
};

// Update user status (approve/reject lawyer)
export const updateUserStatus = async (userId, status) => {
  console.log(`API: Updating status of user ${userId} to ${status}`);
  
  const lawyer = mockData.lawyers.find(l => l.id === userId);
  if (lawyer) {
    lawyer.approved = status === 'approved';
    return simulateApiCall({ success: true, message: "User status updated successfully!", lawyer });
  } else {
    return simulateApiCall({ success: false, message: "User not found" });
  }
};
