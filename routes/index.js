const express = require('express');
const router = express.Router();

// Routing: Home
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// Routing: About
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Routing: Contact
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

// Routing: Products
router.get('/products', (req, res) => {
  res.render('products', { title: 'Products' });
});

// Routing: Services
router.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

module.exports = router;

