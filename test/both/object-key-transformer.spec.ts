import objectTransformer from '@/index'
import {capitalize} from 'lodash'

describe('lib/object-transformer', function test() {
  it('should transform keys', function test() {
    const result = objectTransformer({
      foo: 'foo',
      bar: 'bar',
    }, capitalize)
    expect(result).to.deep.equal({
      Foo: 'foo',
      Bar: 'bar',
    })
  })
  it('should transform keys deeply', function test() {
    const result = objectTransformer({
      foo: 'foo',
      bar: ['bar', {
        foo: 'foo',
        bar: 'bar',
      }],
      john: {
        foo: null,
        bar: 5,
      },
    }, (key) => (capitalize(key)), true)
    expect(result).to.deep.equal({
      Foo: 'foo',
      Bar: ['bar', {
        Foo: 'foo',
        Bar: 'bar',
      }],
      John: {
        Foo: null,
        Bar: 5,
      },
    })
  })
  it('should not transform if value is not an object', function test() {
    {
      const result = objectTransformer('foo', capitalize)
      expect(result).to.equal('foo')
    }
    {
      const result = objectTransformer(555, capitalize)
      expect(result).to.equal(555)
    }
    {
      const result = objectTransformer(undefined, capitalize)
      expect(result).to.equal(undefined)
    }
    {
      const result = objectTransformer(null, capitalize)
      expect(result).to.equal(null)
    }
  })
})
