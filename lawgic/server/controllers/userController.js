const User = require("../models/userModel");

const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.uid;
    const { name, phone, bio } = req.body;

    const updatedUser = await User.findOneAndUpdate(
      { uid: userId },
      { name, phone, bio },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: "User profile updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.error("PUT /profile error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { updateUserProfile };

