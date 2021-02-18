import { parseISO, format } from 'date-fns'
import vi from 'date-fns/locale/vi'

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, 'EEEE, d-LLL-yyyy', { locale: vi })}
    </time>
  )
}
