import fs from 'fs';
import path from 'path';
import test from 'tape';

import { getJson, parseJson } from '../index.js';
import json from './fixtures/F56K.json';

test('getJson', async t => {
  const json = await getJson('F56K');
  t.equal('object', typeof json);
  t.equal('commentz', json.Marker[0].comments);
  t.end();
});

test('getJson promise', t => {
  getJson('F56K').then(json => {
    t.equal('object', typeof json);
    t.equal('commentz', json.Marker[0].comments);
    t.end();
  });
});

test('getJson failure', async t => {
  try {
    await getJson('NOPE_BREH');
  } catch (e) {
    t.equal('Unable to get JSON for CalTopo map "NOPE_BREH".', e.message);
    t.end();
  }
});

test('parseJson', t => {
  const html = fs.readFileSync(path.resolve(__dirname, './fixtures/F56K.html'));
  t.deepEqual(parseJson(html), json);
  t.end();
});

test('parseJson failure', t => {
  try {
    parseJson('asdfasjdoifhsadf');
  } catch (e) {
    t.equal('Unable to parse JSON.', e.message);
    t.end();
  }
});
