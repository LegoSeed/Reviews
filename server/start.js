const app = require('./index.js');

const PORT = 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at localhost:${PORT}!`);
});