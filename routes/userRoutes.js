import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// @route   POST /api/users/signup
// @desc    Register a new user
router.post("/signup", registerUser);

// @route   POST /api/users/login
// @desc    Login user and get JWT
router.post("/login", loginUser);

// @route   GET /api/users/current
// @desc    Get logged-in user's info
// @access  Private
router.get("/current", protect, getCurrentUser);

export default router;
