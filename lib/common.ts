export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const cityNameToSlug = (cityName: string): string => {
  return cityName.replaceAll(' ', '-').toLowerCase()
}

export const slugToCityName = (slug: string): string => {
  // replace all first letters after a space with uppercase, including the first letter
  return slug.replaceAll('-', ' ').replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
}
