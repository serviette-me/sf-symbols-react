import Link from 'next/link'

export default function ReferenceHeader() {
  return (
    <div className="flex w-full items-center justify-end gap-6 px-4 py-4 text-sm font-medium sm:px-8 dark:border-gray-800">
      <Link href="/reference" className="text-sky-500">
        Reference
      </Link>
      <Link href="/home" className="text-gray-500">
        Docs
      </Link>
    </div>
  )
}
