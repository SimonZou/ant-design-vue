import CalendarLocale from '../../vc-calendar/src/locale/cs_CZ'
import TimePickerLocale from '../../time-picker/locale/cs_CZ'

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Vybrat datum',
    rangePlaceholder: [
      'Od', 'Do',
    ],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
}

// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/l
// o cale/example.json

export default locale
