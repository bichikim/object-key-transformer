import objectTransformer from '../'
import {capitalize} from 'lodash'

describe('objectKeyTransformer', () => {
  it('should transform keys', () => {
    const result = objectTransformer(
      {
        bar: 'bar',
        foo: 'foo',
      },
      capitalize,
    )
    expect(result).to.deep.equal({
      Bar: 'bar',
      Foo: 'foo',
    })
    expect('hello').to.equal('hello')
  })
  it('should transform keys deeply', function test() {
    const result = objectTransformer(
      {
        bar: [
          'bar',
          {
            bar: 'bar',
            foo: 'foo',
          },
        ],
        foo: 'foo',
        john: {
          bar: 5,
          foo: null,
        },
      },
      (key) => capitalize(key),
      true,
    )

    expect(result).to.deep.equal({
      Bar: [
        'bar',
        {
          Bar: 'bar',
          Foo: 'foo',
        },
      ],
      Foo: 'foo',
      John: {
        Bar: 5,
        Foo: null,
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
