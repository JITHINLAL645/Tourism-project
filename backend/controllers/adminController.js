const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ isAdmin: false });

    // console.log("Users:", users); 

    res.status(200).json(users);
  } catch (error) {
    console.log("Get Users Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const toggleBlockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isBlocked = !user.isBlocked;
    await user.save();

    res.status(200).json({ message: "User updated" });
  } catch (error) {
    console.log("Block Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getAllUsers, toggleBlockUser };