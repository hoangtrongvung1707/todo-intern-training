// Đọc biến môi trường từ file .env
require('dotenv').config();
const express = require('express');
const app = express();

// Thiết lập cổng (lấy từ .env hoặc mặc định là 5000)
const PORT = process.env.PORT || 5000;

// Định nghĩa một route cơ bản để kiểm tra
app.get('/', (req, res) => {
  res.send('Server is running and ready for To-Do App!');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
