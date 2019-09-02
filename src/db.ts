import { Client } from 'pg';

// DB configuration variables
import { db } from '../config.json';

export const client = new Client({
  host: db.HOST,
  database: db.DATABASE,
  user: db.USER,
  password: db.PASSWORD,
  port: db.PORT
});

// connect client to the server
client.connect()
  .then((): void => console.log("client connected to server"))
  .catch((err): void => console.error(`error connecting to server: ${err}`));
