import {data} from "../data/data";

const sliceArray = (pOffset , pLimit) =>{
    return data.slice(pOffset,pOffset+pLimit)
};

const pageData = (pCurrPage,pContentPerPage) =>{
    const startingIndex = (pCurrPage-1) * pContentPerPage;
    const endingCount = startingIndex + pContentPerPage -1;
    return data.slice(startingIndex,endingCount+1);
}

const totalLengthOfData = data.length;

export {sliceArray,pageData,totalLengthOfData};