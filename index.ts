import express from 'express';
import routers from './mock';

const app = express();
const PORT = process.env.PORT || 8000;

app.use((req, res, next) => {
  if (routers[`${req.method} ${req.path}`]) {
    routers[`${req.method} ${req.path}`](req, res);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
