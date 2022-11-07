const isObject = (value: any) => {
  return value !== null && typeof value === 'object'
}

const arrayTransformer = (value: any, func: (key: string) => string, deep: boolean = false) => {
  return value.map((item: any) => {
    if (isObject(item)) {
      return index(item, func, deep)
    }
    if (Array.isArray(item)) {
      return arrayTransformer(item, func, deep)
    }
    return item
  })
}

const index = (value: any, func: (key: string) => string, deep: boolean = false): any => {
  if (!isObject(value)) {
    return value
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => {
      if (!deep) {
        return [func(key), value]
      } else if (Array.isArray(value)) {
        return [func(key), arrayTransformer(value, func, deep)]
      } else if (isObject(value)) {
        return [func(key), index(value, func, deep)]
      }
      return [func(key), value]
    }),
  )
}

export default index
