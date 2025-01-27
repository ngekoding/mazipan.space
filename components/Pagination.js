import Link from 'next/link'

export default function Pagination ({ prev, next, lang = 'id' }) {
  const hrefSlug = lang === 'id' ? '/page/[page]' : '/en/page/[page]'
  const asSlug = lang === 'id' ? '/page/' : '/en/page/'

  return (
    <div className="flex justify-between items-center mb-16">
      {prev > 1 ? (
        <Link as={`${asSlug}${prev}`} href={hrefSlug}>
          <a aria-label="Previous page">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-l">
              &lt; Prev
            </button>
          </a>
        </Link>
      ) : (
        <Link href="/">
          <a aria-label="Previous page">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-l">
              &lt; Prev
            </button>
          </a>
        </Link>
      )}

      {next ? (
        <Link as={`${asSlug}${next}`} href={hrefSlug}>
          <a aria-label="Next page">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r">
              Next &gt;
            </button>
          </a>
        </Link>
      ) : (
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r  cursor-not-allowed">
          Next &gt;
        </button>
      )}
    </div>
  )
}
