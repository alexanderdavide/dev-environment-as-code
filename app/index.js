import express from 'express';
import postgres from 'postgres';

const PORT = 3000;

const app = express();

const sql = postgres('postgres://postgres:as-code@db:5432/dev-environment');

(async () => {
  await sql`CREATE TABLE IF NOT EXISTS environments (name TEXT)`;
})();

app.get('/', (_, res) => res.send('Hello world!'));

app.listen(PORT, () => {
  console.log(`dev-environment-as-code listening on ${PORT}`);
});
