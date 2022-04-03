import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }); //find user by email

  // if there is match user check password is match
  if (user && (await user.matchPassword(password))) {
    // if there is match user id and password
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      // token: null,
    });
  } else {
    res.status(401); //401: unauthorize
    throw new Error("Invalid email or password");
  }
});

export { authUser };
