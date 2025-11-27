import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import ConnectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

// Connect to MongoDB
ConnectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request body
app.use(
  cors({
    origin: "https://ur-shop-frontend.vercel.app/",
    credentials: true,
  })
); // Enable Cross-Origin Resource Sharing
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev")); // Log requests in dev mode
}

// Routes
app.use("/api/users", userRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Base route
app.get("/", (req, res) => {
  res.send(" API is running successfully...");
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
