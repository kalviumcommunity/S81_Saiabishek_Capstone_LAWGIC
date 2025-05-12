import axios from "axios";
import { getAuthHeader } from "../utils/auth";

export const updateUserProfile = async (profileData) => {
  const headers = await getAuthHeader();
  const response = await axios.put(
    "http://localhost:5000/api/user/profile",
    profileData,
    { headers }
  );
  return response.data;
};
