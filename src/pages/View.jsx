import { useState } from "react";
import SubHeader from "../components/subHeader";

function View({ subName, totalItems, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const itemsToShow = Array.from({ length: itemsPerPage }, (_, i) => {
    const index = indexOfFirstItem + i;
    const listItem = document.querySelector(`ul li:nth-child(${index + 1})`);
    return listItem?.outerHTML;
  });

  return (
    <section className="view">
      <SubHeader subName={subName} />
      <div className="viewSec mw">
        <p>
          <span>장바구니</span> 엿보기
          <img src={`${process.env.PUBLIC_URL}/img/eyes.png`} alt="eyes" />
        </p>
        <div className="viewList">
          <ul>{itemsToShow}</ul>
          <div>
            {Array.from({ length: pageNumber }, (_, i) => {
              const pageNumber = i + 1;
              const isActive = pageNumber === currentPage;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default View;
