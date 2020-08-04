import React from 'react';
import Classes from './Pagination.module.css';

const NUMBER_OF_PAGES_TO_SHOW = 4;

const PaginationTab = ({ totalPages, currentPage }) => {

    const pageNumberArray = [];

    const pageNumberArrayLogic = () => {

        let threshold = totalPages - (totalPages - currentPage) + 3;

        if (currentPage > 1 || currentPage < threshold) {

            let pageNum = currentPage - 1;

            for (let i = 0; i < NUMBER_OF_PAGES_TO_SHOW; i++) {
                pageNumberArray.push(pageNum);
                pageNum += 1;
            }

        } else if (currentPage === 1) {

            let pageNum = currentPage;

            for (let i = 0; i < NUMBER_OF_PAGES_TO_SHOW; i++) {
                pageNumberArray.push(pageNum);
                pageNum += 1;
            }

        } else {

            let pageNum = currentPage - 1;
            while (pageNum !== totalPages + 1) {
                pageNumberArray.push(pageNum);
                pageNum += 1;
            }

        }
    }

    const renderPageNumber = () => {
        pageNumberArrayLogic();
        return (
            <div className={Classes.Pages}>
                <span>Prev</span>
                {pageNumberArray.map((elem) => {
                    <li key={elem}><a className={Classes.links} href="#">{elem}</a></li>
                })}
                <span>Next</span>
            </div>
        )
    };


    return (
        <div className={Classes.PaginationTab}>
            {renderPageNumber()}
        </div>
    );
};

export default PaginationTab;