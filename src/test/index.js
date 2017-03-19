const fs = require('fs');
const path = require('path');
const test = require('tape');

const getJson = require('../index.js');
const { parseMapData, parseMetaData } = require('../index.js');

const mapData = require('./fixtures/F56K-map-data.json');
const metaData = require('./fixtures/F56K-meta-data.json');

test('getJson', async t => {
  const json = await getJson('F56K');
  t.equal(typeof json, 'object');
  t.equal(json.mapData.Marker[0].comments, 'commentz');
  t.end();
});

test('getJson promise', async t => {
  const json = await getJson('F56K');
  t.equal(typeof json.metaData, 'object');
  t.equal(typeof json.mapData, 'object');
  t.equal(json.mapData.Marker[0].comments, 'commentz');
  t.end();
});

test('getJson failure', async t => {
  try {
    await getJson('NOPE_BREH');
  } catch (e) {
    t.equal(e.message, 'Unable to get JSON for CalTopo map "NOPE_BREH".');
    t.end();
  }
});

test('parseMetaData', t => {
  const html = fs.readFileSync(path.resolve(__dirname, './fixtures/F56K.html'));
  t.deepEqual(parseMetaData(html), metaData);
  t.end();
});

test('parseMapData', t => {
  const html = fs.readFileSync(path.resolve(__dirname, './fixtures/F56K.html'));
  t.deepEqual(parseMapData(html), mapData);
  t.end();
});

test('parseMetaData failure', t => {
  try {
    parseMetaData('asdfasjdoifhsadf');
  } catch (e) {
    t.equal(e.message, 'Unable to parse meta data JSON.');
    t.end();
  }
});

test('parseMapData failure', t => {
  try {
    parseMapData('asdfasjdoifhsadf');
  } catch (e) {
    t.equal(e.message, 'Unable to parse map data JSON.');
    t.end();
  }
});
