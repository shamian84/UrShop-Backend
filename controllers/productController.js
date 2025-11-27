import Product from "../models/Product.js";

// @desc   Get all products
// @route  GET /api/products
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// @desc   Add new product
// @route  POST /api/products
export const addProduct = async (req, res, next) => {
  try {
    const { name, price, image, category, description } = req.body;

    if (!name || !price || !image) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }

    const newProduct = await Product.create({
      name,
      price,
      image,
      category,
      description,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

// @desc   Get single product by ID
// @route  GET /api/products/:id
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};
