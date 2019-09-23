# Object key transformer
> Changing object keys 

![LICENSE IMAGE](https://img.shields.io/npm/l/object-key-transformer.svg)
![npm](https://img.shields.io/npm/v/object-key-transformer.svg)
![Codecov](https://img.shields.io/codecov/c/github/bichikim/object-key-transformer.svg)
![Travis](https://img.shields.io/travis/bichikim/object-key-transformer.svg)
## How to use

```typescript
import objectTransformer from '@/index'
import {capitalize} from 'lodash'

const result = objectTransformer({
  foo: 'foo',
  bar: 'bar',
  john: [
    {
      foo: 'foo',
      bar: 'bar'
    } 
  ]
}, capitalize)
console.log(result) // -> {Foo: 'foo', Bar: 'bar', John: {Foo: 'foo', Bar: 'bar'}}
```
