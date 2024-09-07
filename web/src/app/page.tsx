import { redirect } from 'next/navigation'

export default function Page() {
  redirect('/home')
  return null // or a loading spinner if you prefer
}
