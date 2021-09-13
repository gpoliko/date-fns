import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenForm = { one: string; other: string } | string

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenForm> = {
  lessThanXSeconds: {
    one: 'iti iho i te kotahi hekona',
    other: 'iti iho i te {{count}} hēkona',
  },

  xSeconds: {
    one: 'kotahi hekona',
    other: 'e {{count}} hēkona',
  },

  halfAMinute: 'hawhe meneti',

  lessThanXMinutes: {
    one: 'iti iho i te kotahi meneti',
    other: 'iti iho i te {{count}} meneti',
  },

  xMinutes: {
    one: 'kotahi meneti',
    other: '{{count}} meneti',
  },

  aboutXHours: {
    one: 'kotahi haora pea',
    other: 'tata ki te {{count}} haora',
  },

  xHours: {
    one: 'kotahi haora',
    other: 'e {{count}} haora',
  },

  xDays: {
    one: 'kotahi ra',
    other: 'e {{count}} nga ra',
  },

  aboutXWeeks: {
    one: 'tata ki te kotahi wiki',
    other: 'tata ki te {{count}} wiki',
  },

  xWeeks: {
    one: 'kotahi wiki',
    other: 'e {{count}} wiki',
  },

  aboutXMonths: {
    one: 'kotahi marama pea',
    other: 'tata ki te {{count}} marama',
  },

  xMonths: {
    one: 'kotahi marama',
    other: 'e {{count}} marama',
  },

  aboutXYears: {
    one: 'tata ki te kotahi tau',
    other: 'tata ki te {{count}} tau',
  },

  xYears: {
    one: 'kotahi tau',
    other: 'e {{count}} tau',
  },

  overXYears: {
    one: 'neke at ui te tau',
    other: 'neke atu i te {{count}} tau',
  },

  almostXYears: {
    one: 'tata ki te tau',
    other: 'tata ki te {{count}} tau',
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result
  const form = formatDistanceLocale[token]
  if (typeof form === 'string') {
    result = form
  } else if (count === 1) {
    result = form.one
  } else {
    result = form.other.replace('{{count}}', String(count))
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'i roto i ' + result
    } else {
      return 'kei kona ' + result
    }
  }

  return result
}

export default formatDistance