import test from 'tape';

import something from '../something.js';

test('something', t => {
  t.equal(something(), 'something');
  t.end();
});
