'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJson = undefined;

var getJson = exports.getJson = function () {
  var _ref = _asyncToGenerator(function* (mapId) {
    var url = 'https://caltopo.com/m/' + mapId;
    var res = yield _superagent2.default.get(url);

    return {
      metaData: parseMetaData(res.text),
      mapData: parseMapData(res.text)
    };
  });

  return function getJson(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.parseMetaData = parseMetaData;
exports.parseMapData = parseMapData;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function parseMetaData(html) {
  var match = /sarsoft=(.+)$/m.exec(html);
  if (!match) throw Error('Unable to parse meta data JSON.');
  return JSON.parse(match[1]);
}

function parseMapData(html) {
  var match = /org\.sarsoft\.preload = (.+);$/m.exec(html);
  if (!match) throw Error('Unable to parse map data JSON.');
  return JSON.parse(match[1]);
}

exports.default = getJson;
//# sourceMappingURL=index.js.map