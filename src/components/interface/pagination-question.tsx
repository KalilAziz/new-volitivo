import Link from 'next/link'

type PaginationProps = {
  total: number
  page: number
  perPage: number
}

export const PaginationQuestion = ({ total, page, perPage = 10 }: PaginationProps) => {
  const totalPages = Math.ceil(total / perPage)
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          <span className="font-medium">Página {page}</span> de <span className="font-medium">{totalPages}</span> -{' '}
          <span className="font-medium">{total}</span> resultados encontrados.
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        <Link
          href="#"
          className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          Anterior
        </Link>
        <Link
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
        >
          Próxima
        </Link>
      </div>
    </nav>
  )
}
