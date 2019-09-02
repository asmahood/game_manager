import { Client } from 'pg';

export const client = new Client({
  host: process.env.DB_HOST as string,
  database: process.env.DB_DATABASE as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  port: parseInt(process.env.DB_PORT as string)
});

// connect client to the server
client.connect()
  .then((): void => console.log('client connected to server'))
  .catch((err): void => console.error(`error connecting to server: \n${err}`));
