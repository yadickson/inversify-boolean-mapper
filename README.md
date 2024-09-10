# inversify-boolean-mapper

[![version](https://img.shields.io/github/package-json/v/yadickson/inversify-boolean-mapper?style=flat-square)](https://www.npmjs.com/package/inversify-boolean-mapper)
![license](https://img.shields.io/github/license/yadickson/inversify-boolean-mapper?style=flat-square)
[![build](https://img.shields.io/github/actions/workflow/status/yadickson/inversify-boolean-mapper/npm-build.yml?branch=main&style=flat-square)](https://github.com/yadickson/inversify-boolean-mapper/actions/workflows/npm-build.yml)
![tests](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyadickson%2F2edc636fc2ff6aff4b056d455f3290be%2Fraw%2Finversify-boolean-mapper-junit-tests.json)
![coverage](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fgist.githubusercontent.com%2Fyadickson%2F2edc636fc2ff6aff4b056d455f3290be%2Fraw%2Finversify-boolean-mapper-cobertura-coverage.json)

inversify boolean mapper utility

## install dependencies

```bash
npm install
```

## build

```bash
npm run build
```

## test

```bash
npm test
```

## test with coverage report

```bash
npm run test:coverage
```

## mutation test

```bash
npm run test:mutation
```

## format

```bash
npm run format
```

## Install into project

```bash
npm install inversify-boolean-mapper
```

## How to use

Load the module.

```javascript
...
import { BooleanMapperModule } from "inversify-boolean-mapper";
...

export const container = (): Container => {
  const container = new Container();
  container.load(new BooleanMapperModule());
  return container;
};
```

Inject the interface by type.

```javascript
...
import { BOOLEAN_MAPPER_TYPE, BooleanMapperInterface } from "inversify-boolean-mapper";
...

  @inject(BOOLEAN_MAPPER_TYPE.BooleanMapper)
  private readonly booleanMapper: BooleanMapperInterface
```

Use the mapper.

```javascript

...
  booleanMapper.mapper('yes'); // return true
  booleanMapper.mapper('oui'); // return true
  booleanMapper.mapper('si'); // return true
  booleanMapper.mapper('True'); // return true
  booleanMapper.mapper('tRuE'); // return true
  booleanMapper.mapper(true); // return true
  booleanMapper.mapper('False'); // return false
  booleanMapper.mapper('faLsE'); // return false
  booleanMapper.mapper(false); // return false
  booleanMapper.mapper(null); // return false
  booleanMapper.mapper(null, true); // return true
  booleanMapper.mapper(null, false); // return false
  booleanMapper.mapper(' '); // return false
  booleanMapper.mapper('abcd'); // return false
...

```
