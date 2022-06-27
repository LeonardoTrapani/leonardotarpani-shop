const path = require('path');

const express = require('express');

const { body, check } = require('express-validator');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  '/add-product',
  isAuth,
  [
    body('title', 'Please provide a valid title')
      .isLength({ min: 3 })
      .withMessage('The title is too short')
      .isAlphanumeric()
      .withMessage('Please do not use special characters for the title')
      .trim(),
    body('imageUrl', 'Please provide a valid image-url').isURL(),
    body('price', 'Please provide a valid price')
      .isFloat()
      .withMessage('Please insert a number with a decimal value'),
    check('description', 'Please provide a valid description')
      .trim()
      .isLength({
        min: 20,
      })
      .withMessage('The description is too short (min. 20 characters)'),
  ],
  adminController.postAddProduct
);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post(
  '/edit-product',
  isAuth,
  [
    body('title', 'Please provide a valid title')
      .isLength({ min: 3 })
      .withMessage('The title is too short')
      .trim(),
    body('imageUrl', 'Please provide a valid image-url').isURL(),
    body('price', 'Please provide a valid price')
      .isFloat()
      .withMessage('Please insert a number with a decimal value'),
    check('description', 'Please provide a valid description')
      .trim()
      .isLength({
        min: 20,
      })
      .withMessage('The description is too short (min. 20 characters)'),
  ],
  adminController.postEditProduct
);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
