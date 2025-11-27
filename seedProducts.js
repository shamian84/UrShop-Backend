import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const sampleProducts = [
  {
    name: "Wireless Earbuds",
    price: 59,
    description: "High-quality wireless earbuds with noise cancellation and long battery life",
    image: "https://images.unsplash.com/photo-1606813907291-f32a18d1a3a7",
  },
  {
    name: "Smart Watch",
    price: 120,
    description: "Advanced smartwatch with health monitoring features and GPS tracking",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
  },
  {
    name: "Running Shoes",
    price: 99,
    description: "Comfortable running shoes with superior cushioning and breathable mesh",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    name: "Coffee Beans",
    price: 20,
    description: "Premium coffee beans from organic farms with rich flavor",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    name: "Leather Wallet",
    price: 45,
    description: "Genuine leather wallet with RFID protection and multiple card slots",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
  },
  {
    name: "Phone Case",
    price: 25,
    description: "Protective phone case with shock absorption and slim design",
    image: "https://images.unsplash.com/photo-1606813907291-f32a18d1a3a7",
  },
  {
    name: "Sunglasses",
    price: 49,
    description: "UV protection sunglasses with polarized lenses and stylish frame",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    name: "Table Lamp",
    price: 65,
    description: "Modern LED table lamp with adjustable brightness and touch control",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
  },
  {
    name: "Bluetooth Speaker",
    price: 79,
    description: "Portable Bluetooth speaker with excellent sound quality and waterproof design",
    image: "https://images.unsplash.com/photo-1616627457226-b3e4e8dbe8cb",
  },
  {
    name: "Backpack",
    price: 89,
    description: "Durable backpack with multiple compartments and laptop sleeve",
    image: "https://images.unsplash.com/photo-1596464716121-3b5b5f2c6b9e",
  },
  {
    name: "Smartphone",
    price: 499,
    description: "Latest smartphone with advanced camera features and 5G connectivity",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    name: "Camera Lens",
    price: 299,
    description: "Professional camera lens for photography enthusiasts with image stabilization",
    image: "https://images.unsplash.com/photo-1519183071298-a2962be90b8e",
  },
  {
    name: "Wireless Mouse",
    price: 35,
    description: "Ergonomic wireless mouse with precision tracking and long battery life",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
  {
    name: "Keyboard",
    price: 60,
    description: "Mechanical keyboard with RGB backlighting and tactile switches",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    name: "Gaming Chair",
    price: 199,
    description: "Comfortable gaming chair with lumbar support and adjustable height",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
  },
  {
    name: "Monitor",
    price: 250,
    description: "High-resolution monitor with fast refresh rate and color accuracy",
    image: "https://images.unsplash.com/photo-1587202372775-98927b45b22e",
  },
];

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/your-database-name");
    console.log("Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log(`Successfully seeded ${sampleProducts.length} products`);

    // Close connection
    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

// Run the seed function
seedProducts();
