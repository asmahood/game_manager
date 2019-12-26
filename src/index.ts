import Referee from './Referee'
import { Age, Level, System, Position, Game, Partner } from './Game'

import { referees, games } from '../mock_data.json';

import process from 'process';

function init_referees(): Referee[] {
  let refs: Referee[] = [];

  for (const r of referees) {
    const ref = new Referee(r.id, r.first_name, r.last_name, r.level);

    refs.push(ref);
  }

  return refs;
}

function print_referees(refs: Referee[]): void {
  let s: string = '';
  
  for (const r of refs) {
    s += `Referee #${r.getID()}\nName: ${r.getFullName()}\nLevel: ${r.getLevel()}\n`
  }

  process.stdout.write(s);
}

function init_games(refs: Referee[]): Game[] {
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

//function print_games(): void {
//
//}

const refs = init_referees();

print_referees(refs);
console.log('/n')

const gms = init_games(refs);

console.log(gms);
