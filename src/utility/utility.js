import {data} from "../data/data";

let OnlyAvailableData = [];

const filterOnlyAvailable = () => {
    OnlyAvailableData = data.filter((elem)=>elem['avlble']===1)
};

const sliceArray = (pOffset , pLimit) =>{
    return data.slice(pOffset,pOffset+pLimit)
};

const pageData = (pCurrPage,pContentPerPage,pOnlyAvailable=true) =>{
    const startingIndex = (pCurrPage-1) * pContentPerPage;
    const endingCount = startingIndex + pContentPerPage -1;

    if(pOnlyAvailable===true) {
        return OnlyAvailableData.slice(startingIndex,endingCount+1);
    } else {
        return data.slice(startingIndex,endingCount+1);
    }
}

const totalLengthOfData = data.length;

export {sliceArray,pageData,totalLengthOfData,filterOnlyAvailable};