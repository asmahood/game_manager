import Referee from './Referee'

import { referees } from '../mock_data.json';

function init_referees(): Referee[] {
  let refs: Referee[] = [];

  for (const r of referees) {
    const ref = new Referee(r.id, r.first_name, r.last_name);

    refs.push(ref);
  }

  return refs;
}

const refs = init_referees();

console.log(refs);
