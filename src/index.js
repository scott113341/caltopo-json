const request = require('superagent');

async function getJson (mapId) {
  const html = await fetchHtml(mapId);
  return {
    metaData: parseMetaData(html),
    mapData: parseMapData(html)
  };
}

async function fetchHtml (mapId) {
  try {
    const url = `https://caltopo.com/m/${mapId}`;
    const res = await request.get(url);
    if (res.text.length < 1000) throw Error;
    return res.text;
  } catch (e) {
    throw Error(`Unable to get JSON for CalTopo map "${mapId}".`);
  }
}

function parseMetaData (html) {
  const match = /sarsoft=(.+)$/m.exec(html);
  if (!match) throw Error('Unable to parse meta data JSON.');
  return JSON.parse(match[1]);
}

function parseMapData (html) {
  const match = /org\.sarsoft\.preload = (.+);$/m.exec(html);
  if (!match) throw Error('Unable to parse map data JSON.');
  return JSON.parse(match[1]);
}

Object.assign(getJson, {
  getJson,
  parseMetaData,
  parseMapData
});

module.exports = getJson;
