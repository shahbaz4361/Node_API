import express from 'express';
import productController from '../Controllers/productController.js';
const productRouter = express.Router();


// Create new product
productRouter.post('/createProduct', productController.createProduct);

// Fetch all products
productRouter.get('/fetchAllProduct', productController.fetchAllProduct);

// Update product
productRouter.put('/updateProduct/:id', productController.updateProduct);

// Delete product
productRouter.delete('/deleteProduct/:id', productController.deleteProduct);

// Fetch single product by ID
productRouter.get('/findById/:id', productController.fetchProductById);

// Search Product By entering Value Pair (key and Value)
productRouter.get('/searchProduct', productController.searchProduct)


productRouter.get('/searchMoreProduct', productController.searchMoreProduct)


export default productRouter;
