import express from 'express';
import routers from './mock';

const app = express();
const PORT = process.env.PORT || 8000;

Object.keys(routers).map(endpoint => {
  const [method, path] = endpoint.split(' ');
  switch (method.toUpperCase()) {
    case 'GET': app.get(path, routers[endpoint]);
    case 'POST': app.post(path, routers[endpoint]);
    case 'PUT': app.put(path, routers[endpoint]);
    case 'DELETE': app.delete(path, routers[endpoint]);
  }
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
