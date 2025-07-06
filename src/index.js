const express = require('express');
const path = require('path');
const helmet = require('helmet');
const serverless = require('serverless-http');

const app = express();

// Apply Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "https://cdn.tailwindcss.com",
          "'sha256-Ua7xizGnAIIEu3oDw8Y8hRyF3ks2JpUzYZVgy828eFk='",
          "'sha256-SIDHjR1vwyncuRi5m71SeGPWO3Vv+9OjzLq+OWor71I='",
        ],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:"],
        connectSrc: ["'self'"]
      }
    }
  })
);

// Serve favicon first
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'favicon.ico'));
});

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/learn', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'chapter.html'));
});

// Vercel will call this handler instead
module.exports = app;
module.exports.handler = serverless(app);
