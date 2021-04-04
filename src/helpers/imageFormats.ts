export const imageFormats = (
  source: string,
  format:
    | 'thumb'
    | 'marker_thumb'
    | 'slider_thumb'
    | 'slider_dot_thumb'
    | 'small'
    | 'middle'
    | 'big'
) => {
  let prefix = ''

  switch (format) {
    case 'thumb':
      prefix = 'images/resized/thumb/'
      break

    case 'marker_thumb':
      prefix = 'images/resized/marker_thumb/'
      break

    case 'slider_thumb':
      prefix = 'images/resized/slider_thumb/'
      break

    case 'slider_dot_thumb':
      prefix = 'images/resized/slider_dot_thumb/'
      break

    case 'small':
      prefix = 'images/resized/small/'
      break

    case 'middle':
      prefix = 'images/resized/middle/'
      break

    case 'big':
      prefix = 'images/resized/big/'
      break
  }

  return `${prefix}${source}`
}
