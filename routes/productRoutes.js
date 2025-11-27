import express from "express";
import {
  getProducts,
  addProduct,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts).post(addProduct);
router.route("/:id").get(getProductById);

export default router;
