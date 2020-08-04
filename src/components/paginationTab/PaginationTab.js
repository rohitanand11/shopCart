import React from 'react';
import Classes from './PaginationTab.module.scss';

const NUMBER_OF_PAGES_TO_SHOW = 4;

const PaginationTab = ({ totalPages, currentPage ,updateCurrentPage}) => {

    const pageNumberArray = [];

    const pageNumberArrayLogic = () => {

        let threshold = totalPages - (totalPages - currentPage) + 3;

        if (currentPage > 1 && currentPage < threshold) {

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
    };

    const prevFunc = () => {
        if(pageNumberArray[0]>1){
            updateCurrentPage(currentPage-1);
        }
    }

    const nextFunc = () => {
        if(pageNumberArray[pageNumberArray.length-1]<totalPages-1){
            updateCurrentPage(currentPage+1);
        }
    }

    const renderPageNumber = () => {
        pageNumberArrayLogic();
        return (
            <div className={Classes.Pages}>
                <span onClick={prevFunc} style={{cursor:"grab"}}>Prev</span>
                <ul className={Classes.listStyle}>
                {pageNumberArray.map((elem) => {
                    return <li key={elem} onClick={()=>updateCurrentPage(elem)}>{elem}</li>
                })}
                </ul>
                <span onClick={nextFunc} style={{cursor:"grab"}}>Next</span>
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