// total numerof records
// limit

import { useEffect, useState } from "react";

function Pagination({ total, limit, currentPage, setCurrentPage}) {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    if (limit != 0) {
      let TotalPages = Math.ceil(total / limit);
      let tempPages = [];
      for (let i = 1; i < TotalPages + 1; i++) {
        tempPages.push(i);
      }
      setPages(tempPages);
    }
  }, [total, limit]);

  function updatePage(page) {
    if(pages && pages.includes(page)){
        setCurrentPage(page);
    }
  }

  return (
    <nav aria-label="Page navigation example" className="select-none">
      <ul className="inline-flex -space-x-px">
        <li>
          <a
            onClick={()=>{updatePage(currentPage-1)}}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </a>
        </li>
        {pages &&
          pages.map((page) => (
            <li key={page}>
              <a
                onClick={()=>{updatePage(page)}}
                className={page == currentPage ? 'pagination-active' : 'pagination'}
              >
                {page}
              </a>
            </li>
          ))}
        <li>
          <a
            onClick={()=>{updatePage(currentPage+1)}}
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
