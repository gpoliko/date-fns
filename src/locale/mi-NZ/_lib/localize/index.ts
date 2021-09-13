import type { Localize, LocalizeFn, QuarterIndex } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['BCE', 'CE'] as const,
  abbreviated: ['BCE', 'CE'] as const,
  wide: ['BCE', 'CE'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['HW1', 'HW2', 'HW3', 'HW4'] as const,
  wide: [
    'Hauwhā tuatahi',
    'Hauwhā tuarua',
    'Hauwhā tuatoru',
    'Hauwhā tuawhā',
  ] as const,
}

const monthValues = {
  narrow: ['K', 'H', 'P', 'P', 'H', 'P', 'H', 'H', 'M', 'N', 'R', 'H'] as const,
  abbreviated: [
    'Kohi',
    'Hui',
    'Pou',
    'Pae',
    'Hara',
    'Pipi',
    'Hōngo',
    'Here',
    'Manu',
    'Nuku',
    'Rangi',
    'Haki',
  ] as const,
  wide: [
    'Kohitātea',
    'Huitanguru',
    'Poutūterangi',
    'Paengawhāwhā',
    'Haratua',
    'Pipiri',
    'Hōngongoi',
    'Hereturikōkā',
    'Mahuru',
    'Whiringa-ā-nuku',
    'Whiringa-ā-rangi',
    'Hakihea',
  ] as const,
}

const dayValues = {
  narrow: ['T', 'H', 'T', 'A', 'P', 'M', 'H'] as const,
  short: ['Tap', 'Hin', 'Tū', 'Apa', 'Par', 'Mer', 'Hor'] as const,
  abbreviated: [
    'Hin',
    'Tū',
    'Apa',
    'Par',
    'Mer',
    'Hor',
    'Tap',
  ] as const,
  wide: [
    'Rātapu',
    'Rāhina',
    'Rātū',
    'Rāapa',
    'Rāpare',
    'Rāmere',
    'Rāhoroi',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'waenganui po',
    noon: 'poututanga',
    morning: 'ata',
    afternoon: 'ahiahi',
    evening: 'ahiahi',
    night: 'po',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'waenganui po',
    noon: 'poututanga',
    morning: 'ata',
    afternoon: 'ahiahi',
    evening: 'ahiahi',
    night: 'po',
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'i te waenganui po',
    noon: 'i te poutumarotanga',
    morning: 'i te ata',
    afternoon: 'i te ahiahi',
    evening: 'i te ahiahi',
    night: 'i te po',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (dirtyNumber) => {
  const number = Number(dirtyNumber)

  return number + ''
}

const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (quarter - 1) as QuarterIndex,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
  }),
}

export default localize
