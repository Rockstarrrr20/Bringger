const express = require("express");
const product_router = express.Router();
const auth = require("../../middleware/adminauth");
const multer = require("multer");
const upload = multer({ dest: "../../public/images/" })
let {
    updateproduct,
    viewproduct,
    addproduct,
    addproductpage,
    update_product_page,
    filter_product,

}=  require("./../controller/controller");


product_router.get("/add_admin_services_page",auth,addproductpage);
product_router.post("/updateproduct",auth,updateproduct);
product_router.post("/update_service_page", auth,update_product_page);
product_router.post("/add_product",auth,addproduct);
product_router.get("/viewproduct",auth,viewproduct);
product_router.get("/filterproduct",auth,filter_product);


module.exports = product_router;