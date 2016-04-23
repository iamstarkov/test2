# es-dep-unit

[![NPM version][npm-image]][npm-url]
[![Unix Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Constructor for ECMAScript 2015+/CommonJS dependency unit `Object { requested, from, resolved }`

## Install

    npm install --save es-dep-unit

## Usage

```js
import esDepUnit from 'es-dep-unit';

esDepUnit('unicorns'); // unicorns
```

## API

### esDepUnit(input, [options])

#### input

*Required*  
Type: `String`

Lorem ipsum.

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/es-dep-unit
[npm-image]: https://img.shields.io/npm/v/es-dep-unit.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/test2
[travis-image]: https://img.shields.io/travis/iamstarkov/test2.svg?style=flat-square&label=unix

[appveyor-url]: https://ci.appveyor.com/project/iamstarkov/test2
[appveyor-image]: https://img.shields.io/appveyor/ci/iamstarkov/test2.svg?style=flat-square&label=windows

[coveralls-url]: https://coveralls.io/r/iamstarkov/test2
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/test2.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/test2
[depstat-image]: https://david-dm.org/iamstarkov/test2.svg?style=flat-square
