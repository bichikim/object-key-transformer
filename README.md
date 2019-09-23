# Object key transformer
> Changing object keys 

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
