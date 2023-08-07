const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authController = require('./controllers/authController');
const productController = require('./controllers/productController')
const authMiddleware = require('./utils/auth');
dotenv.config();

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://anurag2361:anuraggg@anurag2361.1pepyj9.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.post('/signup', authController.signup);
app.post('/login', authController.login);
app.post('/product/create', authMiddleware, productController.createProduct);
app.get('/product', authMiddleware, productController.getProducts);
app.put('/product/edit/:productId', authMiddleware, productController.editProduct);
app.delete('/product/delete/:productId', authMiddleware, productController.deleteProduct);
  
const PORT = process.env.PORT || 3000;
app.listen(PORT);
