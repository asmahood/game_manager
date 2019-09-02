import { client as db } from './db';

db.query('SELECT NOW()')
  .then((res): void => {
    console.log(res);
    process.exit(0);
  })
  .catch((err): void => {
    console.error(err);
    process.exit(1);
  });

// process.stdin.on('readable', (): void => {
//   let chunk = process.stdin.read();

//   process.stdout.write(`data: ${chunk}`);
// });

// process.stdin.on('end', (): void => {
//   process.stdout.write('end');
// });