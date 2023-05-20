import React from 'react';

const Paginations = ({ totalNews, newsPerPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <a href='#' onClick={event => {
              event.preventDefault();
              paginate(number);
            }}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paginations;
