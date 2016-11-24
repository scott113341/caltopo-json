import request from 'superagent';

export default getJson;

export async function getJson (mapId) {
  const url = `https://caltopo.com/m/${mapId}`;
  const res = await request.get(url);

  try {
    return parseJson(res.text);
  } catch (e) {
    throw Error(`Unable to get JSON for CalTopo map "${mapId}".`);
  }
}

export function parseJson (html) {
  const match = /org\.sarsoft\.preload = (.+);/.exec(html);
  if (!match) throw Error('Unable to parse JSON.');
  return JSON.parse(match[1]);
}
