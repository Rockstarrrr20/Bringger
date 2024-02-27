const express = require("express");
const router = express.Router();
const auth = require("../../middleware/adminauth");
const multer = require("multer");
const upload = multer({ dest: "../../public/images/" })
let {
  register,
  register_data_save,
  login_data_validation,
  login,
  signout,
  sellerprofile,
  profileupdate,
  update_profile,
  dashboard,
  verify_otp,
  change_pass_page,
  change_pass,
  transaction_view,
  filter_transaction,
} = require("./../controller/controller");
router.get("/register", register);
router.get("/",login);
router.post("/register_data_save", register_data_save);
router.post("/login-data-validation", login_data_validation);
router.get("/dashboard", auth,dashboard);
router.post("/verify-otp",verify_otp);
router.post("/flash",async(req,res)=>{
    res.render("/flash")
  });
  router.get("/signout",signout);
  router.get("/sellerprofile",auth,sellerprofile);
  router.get("/profileupdate",auth,profileupdate);
  router.get("/change_pass_page",auth,change_pass_page);
  router.post("/update_profile",auth,update_profile);
  router.post("/change_pass",auth,change_pass);
  router.get("/viewtransaction",auth,transaction_view);
  router.post("/filtertransaction",auth,filter_transaction);

module.exports = router;
