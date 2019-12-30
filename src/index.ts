import process from 'process';

import Referee from './structures/Referee';
import { Age, Level, System, Position, Game, Partner } from './structures/Game';

import { referees, games } from '../mock_data.json';

function initReferees(): Referee[] {
  let refs: Referee[] = [];

  for (const r of referees) {
    const ref = new Referee(r.id, r.first_name, r.last_name, r.level);

    refs.push(ref);
  }

  return refs;
}

function printReferees(refs: Referee[]): void {
  let s = '';
  
  for (const r of refs) {
    s += `Referee #${r.getID()}\nName: ${r.getFullName()}\nLevel: ${r.getLevel()}\n`;
  }

  process.stdout.write(s);
}

function initGames(refs: Referee[]): Game[] {
  let gms: Game[] = [];
  let partners: Partner[] = [];

  for (const g of games) {
    for (const p of g.partners) {
      const referee = refs[p.id - 1];
      partners.push({ referee, position: p.position as Position });
    }    


    const game = new Game(g.id, g.location, g.age as Age, 
      g.level as Level, g.sys as System, g.position as Position, partners);
  
    gms.push(game);
  }

  return games;
}

// Run initializers
const refs = initReferees();
// @ts-ignore
const gms = initGames(refs);

const { argv: args } = process;

// Add new files argument
if (args[2] === '-a') {
  const files = args.slice(3);

// Display ref or game table 
} else if (args[2] === '-d') {
  const opt = args[3];

  if (!opt) {
    process.stdout.write('No option found. Exiting process...');
    process.exit(1);
  } else if (opt === 'refs') {
    printReferees(refs);
  } else if (opt === 'games') {
    // printGames(gms);
  }
} else {
  // No commands were recognized so print help message
  process.stdout.write(
    `Welcome to Game Manager!\n
    Here is a list of accepted commands:\n
    -d [refs|games]     --  Displays either the referees or games in the database 
    -a file [...files]  --  Parses each file to add new games to the database`
  );
}

