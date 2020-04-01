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
}, capitalize, true) // last argument is for deeply transforming objects
console.log(result) // -> {Foo: 'foo', Bar: 'bar', John: {Foo: 'foo', Bar: 'bar'}}
```

## js Files

### CDN
```html
<script type="text/javascript" src="https://unpkg.com/object-key-transformer@${npm version}/dist
/index.umd.js
"></script>
<script>
  var result = ObjectKeyTransformer({/* ... */})
</script>
```

### module
```typescript
import objectKeyTransformer from 'object-key-transformer'
const result = objectKeyTransformer({/* ... */})
```
