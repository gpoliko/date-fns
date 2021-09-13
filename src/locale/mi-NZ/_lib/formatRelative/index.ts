import type { FormatRelativeFn } from '../../../types'

const formatRelativeLocale = {
  //TODO: Confirm past date/time
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'inanahi i te' p",
  today: "'i tenei ra i te' p",
  tomorrow: "'apopo a te' p'",
  nextWeek: "'a te' eeee 'a te' p",
  other: 'P',
}

const formatRelative: FormatRelativeFn = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token]

export default formatRelative
