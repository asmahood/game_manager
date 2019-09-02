import { client as db } from './db';

db.query('SELECT NOW()')
  .then((res): void => console.log(res))
  .catch((err): void => console.error(err));

process.exit(0);

// process.stdin.on('readable', (): void => {
//   let chunk = process.stdin.read();

//   process.stdout.write(`data: ${chunk}`);
// });

// process.stdin.on('end', (): void => {
//   process.stdout.write('end');
// });