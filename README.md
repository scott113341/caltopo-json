# caltopo-json

[![npm-version][npm-version-badge]][npm-version-href]
[![build-status][build-status-badge]][build-status-href]
[![dependencies][dependencies-badge]][dependencies-href]
[![dev-dependencies][dev-dependencies-badge]][dev-dependencies-href]


Get the underlying JSON from a CalTopo map.

`npm install caltopo-json`

## usage example

To get the CalTopo JSON for map [https://caltopo.com/m/F56K](https://caltopo.com/m/F56K):

```js
// ES6
import getJson from 'caltopo-json';

getJson('F56K').then(json => console.log(json.Marker));
  
/*
[
  {
    "comments": "commentz",
    "id": 0,
    "label": "Test Point",
    "position": {
      "id": 23773245,
      "lat": 39.46486419970058,
      "lng": -106.64050943389896
    },
    "updated": "1479945025000",
    "url": "#FF0000"
  }
]
*/
```

```js
// ES5
const getJson = require('caltopo-json').default;

getJson('F56K').then(json => console.log(json.Marker));
  
/*
[
  {
    "comments": "commentz",
    "id": 0,
    "label": "Test Point",
    "position": {
      "id": 23773245,
      "lat": 39.46486419970058,
      "lng": -106.64050943389896
    },
    "updated": "1479945025000",
    "url": "#FF0000"
  }
]
*/
```


[npm-version-badge]: https://img.shields.io/npm/v/caltopo-json.svg?style=flat-square
[npm-version-href]: https://www.npmjs.com/package/caltopo-json

[build-status-badge]: https://img.shields.io/travis/scott113341/caltopo-json/master.svg?style=flat-square
[build-status-href]: https://travis-ci.org/scott113341/caltopo-json/branches

[dependencies-badge]: https://img.shields.io/david/scott113341/caltopo-json/master.svg?style=flat-square
[dependencies-href]: https://david-dm.org/scott113341/caltopo-json/master#info=dependencies

[dev-dependencies-badge]: https://img.shields.io/david/dev/scott113341/caltopo-json/master.svg?style=flat-square
[dev-dependencies-href]: https://david-dm.org/scott113341/caltopo-json/master#info=devDependencies
