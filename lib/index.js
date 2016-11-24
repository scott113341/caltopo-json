'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJson = undefined;

var getJson = exports.getJson = function () {
  var _ref = _asyncToGenerator(function* (mapId) {
    var url = 'https://caltopo.com/m/' + mapId;
    var res = yield _superagent2.default.get(url);

    try {
      return parseJson(res.text);
    } catch (e) {
      throw Error('Unable to get JSON for CalTopo map "' + mapId + '".');
    }
  });

  return function getJson(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.parseJson = parseJson;

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getJson;
function parseJson(html) {
  var match = /org\.sarsoft\.preload = (.+);/.exec(html);
  if (!match) throw Error('Unable to parse JSON.');
  return JSON.parse(match[1]);
}
//# sourceMappingURL=index.js.map