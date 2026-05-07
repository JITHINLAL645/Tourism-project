
const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  toggleBlockUser,
} = require("../controllers/adminController");

router.get("/users", getAllUsers);
router.put("/block-user/:id", toggleBlockUser);

module.exports = router;