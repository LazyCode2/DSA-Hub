const express = require('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuring CSP 
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: [
          "'self'",
          "https://cdn.tailwindcss.com", // Allow Tailwind CSS
          // Hashes for inline scripts
          "'sha256-Ua7xizGnAIIEu3oDw8Y8hRyF3ks2JpUzYZVgy828eFk='",
          "'sha256-SIDHjR1vwyncuRi5m71SeGPWO3Vv+9OjzLq+OWor71I='",
        ],
        styleSrc: [
          "'self'",
          "https://fonts.googleapis.com", 
          "'unsafe-inline'",
        ],
        fontSrc: ["'self'", "https://fonts.gstatic.com"], 
        imgSrc: ["'self'", "data:"], 
        connectSrc: ["'self'"], 
      },
    },
  })
);

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/learn', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'chapter.html'));
});

// Handle favicon explicitly
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Start server for debug only
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});