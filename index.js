const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

// 1
app.get('/add', (req, res) => {
  const { array } = req.body;
  const sum = array.reduce((acc, num) => acc + num, 0);
  res.json({ result: sum });
});

// 2
app.get('/product', (req, res) => {
  const { array } = req.body;
  const product = array.reduce((acc, num) => acc * num, 1);
  res.json({ result: product });
});

// 3
app.get('/evens', (req, res) => {
  const { array } = req.body;
  const evens = array.filter(num => num % 2 === 0);
  res.json({ result: evens });
});

// 4
app.get('/min', (req, res) => {
  const { array } = req.body;
  const min = Math.min(...array);
  res.json({ result: min });
});

app.get('/max', (req, res) => {
  const { array } = req.body;
  const max = Math.max(...array);
  res.json({ result: max });
});

// 5
app.get('/sort', (req, res) => {
  const { array, ascending } = req.body;
  const sortedArray = array.sort((a, b) => (ascending ? a - b : b - a));
  res.json({ result: sortedArray });
});

// 6
app.get('/target', (req, res) => {
  const { array, target } = req.body;
  const hasPair = array.some((num, index) =>
    array.slice(index + 1).includes(target - num)
  );
  res.json({ result: hasPair });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
