const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Simple API endpoints
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Producto 1', price: 10.99 },
    { id: 2, name: 'Producto 2', price: 15.99 },
    { id: 3, name: 'Producto 3', price: 20.99 }
  ]);
});

app.post('/api/products', (req, res) => {
  const product = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price
  };
  res.status(201).json(product);
});

app.get('/api/products/:id', (req, res) => {
  const product = {
    id: parseInt(req.params.id),
    name: `Producto ${req.params.id}`,
    price: Math.random() * 100
  };
  res.json(product);
});

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Vecopa API is running',
    endpoints: {
      products: '/api/products',
      health: '/health'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;