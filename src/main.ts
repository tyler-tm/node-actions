import express from 'express';
import { greet } from './greeter';

const app = express();

app.get('/:name', (req, res) => res.send(greet(req.params.name)));

const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`app listening on port ${port}!`));
