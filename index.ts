import express from 'express';
import cors from 'cors';
const app = express();
import { chats } from './db'
app.get('/_ping', (req, res) => {
  res.send('pong');
});
app.get('/chats',cors(), (req, res) => {
  console.log("hit")
    res.send(chats);
  });
app.use(cors());

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
