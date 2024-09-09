# inversify-boolean-mapper

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
