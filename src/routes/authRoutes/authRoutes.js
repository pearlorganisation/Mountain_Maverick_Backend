import express from "express";
import {
  deleteAccount,
  forgetPassword,
  login,
  newPassword,
  resetPassword,
  signUp,
  updateProfile,
  verifyOtp,
  verifyOtpForDeleteAccount,
  verifyOtpForForgotPassword,
  verifyResetPasswordOtp,
} from "../../controllers/auth/auth.js";

const router = express.Router();

router.route("/signup").post(signUp);
router.route("/login").post(login);
router.route("/verifyOtp").post(verifyOtp);
router.route("/updateProfile").post(updateProfile);
router.route("/resetPassword").post(resetPassword);
router.route("/verifyResetPasswordOtp").post(verifyResetPasswordOtp);
router.route("/deleteAccount").post(deleteAccount);
router.route("/verifyOtpForDeleteAccount").post(verifyOtpForDeleteAccount);
router.route("/forgetPassword").post(forgetPassword);
router.route("/verifyOtpForForgotPassword").post(verifyOtpForForgotPassword);
router.route("/newPassword").post(newPassword);
export default router;
