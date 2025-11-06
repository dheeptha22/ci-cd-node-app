const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Hello from CI/CD Node.js App!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server running fine!' });
});

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
