export const getAuthHeader = async () => {
    const user = firebase.auth().currentUser;
    if (user) {
      const token = await user.getIdToken();
      return { Authorization: `Bearer ${token}` };
    }
    return {};
  };
  