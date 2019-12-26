import Referee from './Referee'

import { referees } from '../mock_data.json';

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

const refs = init_referees();

print_referees(refs);
