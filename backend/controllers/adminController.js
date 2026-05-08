const User = require("../models/User");

// GET ALL USERS WITH PAGINATION
const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // current page
    const limit = parseInt(req.query.limit) || 5; // users per page
    const skip = (page - 1) * limit;

    const totalUsers = await User.countDocuments({ isAdmin: false });

    const users = await User.find({ isAdmin: false })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      users,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      totalUsers,
    });
  } catch (error) {
    console.log("Get Users Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// BLOCK / UNBLOCK USER
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