const User = require("../models/user");

const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, about } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, about },
      { returnDocument: "after" }
    );

    res.status(200).json({
      success: true,
      message: "Profile Updated",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Update Failed",
    });
  }
};

module.exports = { updateProfile };