const isObject = (value: any) => {
  return value !== null && typeof value === 'object'
}

const arrayTransformer = (
  value: any,
  func: (key: string) => string,
  deep: boolean = false,
) => {
  return value.map((item) => {
    if(isObject(item)) {
      return index(item, func, deep)
    }
    if(Array.isArray(item)) {
      return arrayTransformer(item, func, deep)
    }
    return item
  })
}

const index = (
  value: any,
  func: (key: string) => string,
  deep: boolean = false,
  ): any => {
  if(!isObject(value)) {
    return value
  }
  return Object.keys(value).reduce((result, key) => {
    const item = value[key]
    if(!deep) {
      result[func(key)] = item
    } else if(Array.isArray(item)) {
      result[func(key)] = arrayTransformer(item, func, deep)
    } else if(isObject(item)) {
      result[func(key)] = index(item, func, deep)
    } else {
      result[func(key)] = item
    }
    return result
  }, {})
}

export default index
