import { Link } from "react-router-dom";

function Pagination({ itemsPerPage, totalItems, onPageChange, currentPage }) {
  const pageNumbers = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };
  return (
    <div className="paginations">
      <button
        disabled={currentPage === 1}
        onClick={() => {
          handlePageChange(currentPage - 1);
        }}
      >
        이전
      </button>
      <p className="page-num">{currentPage}</p>
      <button
        disabled={currentPage === pageNumbers}
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
      >
        다음
      </button>
    </div>
  );
}

export default Pagination;
