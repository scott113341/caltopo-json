'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

require('source-map-support/register');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _index = require('../index.js');

var _F56K = require('./fixtures/F56K.json');

var _F56K2 = _interopRequireDefault(_F56K);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(0, _tape2.default)('getJson', function () {
  var _ref = _asyncToGenerator(function* (t) {
    var json = yield (0, _index.getJson)('F56K');
    t.equal('object', typeof json === 'undefined' ? 'undefined' : _typeof(json));
    t.equal('commentz', json.Marker[0].comments);
    t.end();
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

(0, _tape2.default)('getJson promise', function (t) {
  (0, _index.getJson)('F56K').then(function (json) {
    t.equal('object', typeof json === 'undefined' ? 'undefined' : _typeof(json));
    t.equal('commentz', json.Marker[0].comments);
    t.end();
  });
});

(0, _tape2.default)('getJson failure', function () {
  var _ref2 = _asyncToGenerator(function* (t) {
    try {
      yield (0, _index.getJson)('NOPE_BREH');
    } catch (e) {
      t.equal('Unable to get JSON for CalTopo map "NOPE_BREH".', e.message);
      t.end();
    }
  });

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

(0, _tape2.default)('parseJson', function (t) {
  var html = _fs2.default.readFileSync(_path2.default.resolve(__dirname, './fixtures/F56K.html'));
  t.deepEqual((0, _index.parseJson)(html), _F56K2.default);
  t.end();
});

(0, _tape2.default)('parseJson failure', function (t) {
  try {
    (0, _index.parseJson)('asdfasjdoifhsadf');
  } catch (e) {
    t.equal('Unable to parse JSON.', e.message);
    t.end();
  }
});
//# sourceMappingURL=index.js.map