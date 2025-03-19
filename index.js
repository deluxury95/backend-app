
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();  // Load environment variables from .env file

// const port = process.env.PORT || 5000;

// // middleware
// app.use(express.json());
// app.use(cors({
//     origin: ['http://localhost:5173', 'https://frontend-4pizatvpm-deng-luxury-mous-projects.vercel.app'],
//     credentials: true
// }));

// // routes
// const bookRoutes = require('./src/books/book.route');
// const orderRoutes = require("./src/orders/order.route");
// const userRoutes = require("./src/users/user.route");
// const adminRoutes = require("./src/stats/admin.stats");

// app.use("/api/books", bookRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/auth", userRoutes);
// app.use("/api/admin", adminRoutes);

// // MongoDB connection
// async function main() {
//   try {
//     await mongoose.connect(process.env.DB_URL);  // MongoDB URL from .env file
//     console.log("MongoDB connected successfully!");
    
//     // Start the server only after successful DB connection
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// }

// main();



const express = require("express");
const helmet = require("helmet");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();  // Load environment variables from .env file

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'https://frontend-4pizatvpm-deng-luxury-mous-projects.vercel.app'],
  credentials: true
}));

// Set Content-Security-Policy using Helmet
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'none'"], // Default to no sources
    imgSrc: ["'self'", "https://backend-app-three-iota.vercel.app"], // Allow images from your backend
    // Add other directives as needed
  }
}));

// Routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB connection
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);  // MongoDB URL from .env file
    console.log("MongoDB connected successfully!");

    // Start the server only after successful DB connection
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

main();
