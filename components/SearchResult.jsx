import Link from "next/link";

const SearchResult = ({ results, term, closeSearchResults }) => {
  return (
    <div className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow">
      <p className="!text-lg">
        Showing results for <span className="font-semibold">"{term}":</span>
      </p>
      <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
        {results.map((results) => (
          <li key={results.id}>
            <Link
              href={`/docs/${results.id}`}
              className=" translate-all hover:text-emerald-600 "
              onClick={(e) => closeSearchResults(e)}
            >
              {results.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResult;
