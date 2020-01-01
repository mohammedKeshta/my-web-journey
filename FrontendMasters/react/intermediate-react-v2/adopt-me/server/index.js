import express from 'express';
import fs from 'fs';
import { ServerLocation } from '@reach/router';
import App from '../src/App';

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync('build/index.html').toString();

const parts = html.split('not rendered');

const app = express();

app.use('/build', express.static('build'));

app.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );

  const pageMarkup = `${parts[0]}${renderToString(reactMarkup)}${parts[1]}`;
  res.send(pageMarkup).end();
});

app.listen(PORT, () => console.log(`Server is run at ${port}`));
