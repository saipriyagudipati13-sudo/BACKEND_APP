import { getproducts } from "../controllers/productController";
import express from "express";
const getProducts = express.Router();
productRouter.get("/", getproducts);
productRouter.get("/products", getproducts);
productRouter.get("/add")

export { getProducts };