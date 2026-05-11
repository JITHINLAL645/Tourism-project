const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const skip = (page - 1) * limit;

    let query = {
      isAdmin: false,
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    };

    const totalUsers = await User.countDocuments(query);

    const users = await User.find(query)
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

const toggleBlockUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isBlocked = !user.isBlocked;
    await user.save();

    res.status(200).json({
      message: "User updated",
      user,
    });
  } catch (error) {
    console.log("Block Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getAllUsers, toggleBlockUser };