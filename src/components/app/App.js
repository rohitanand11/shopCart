import React, { useState } from "react";
import Header from "../header/Header";
import MainDisplay from "../mainDisplay/MainDisplay";
import PaginationTab from "../paginationTab/PaginationTab";

import Classes from "./App.module.scss";
import * as utility from "../../utility/utility";

const PRODUCTS_PER_PAGE = 9;
utility.filterOnlyAvailable();

const App = () => {
  const [currPage, setCurrPage] = useState(1);
  const [OnlyAvailable, setOnlyAvailable] = useState(false);

  const updateCurrPageFunc = (pPage) => {
    setCurrPage(pPage);
  };

  const updateDataForCurrPage = () => {
    const dataForCurrentPage = utility.pageData(
      currPage,
      PRODUCTS_PER_PAGE,
      OnlyAvailable
    );
    return dataForCurrentPage;
  };

  const changeAvailable = () => {
    OnlyAvailable ? setOnlyAvailable(false) : setOnlyAvailable(true);
  };

  return (
    <div className={Classes.App}>
      <Header
        changeAvailable={changeAvailable}
        OnlyAvailable={OnlyAvailable}
      />
      <MainDisplay data={updateDataForCurrPage()} />
      <PaginationTab
        totalPages={utility.totalLengthOfData / PRODUCTS_PER_PAGE}
        currentPage={currPage}
        updateCurrentPage={updateCurrPageFunc}
      />
    </div>
  );
};

export default App;
