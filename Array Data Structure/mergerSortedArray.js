function MergerTwoArray (arr1,arr2){
    let i=1;
    let j=1;
    let arr1Item = arr1[0];
    let arr2Item = arr1[0];
    const mergedArray = [];

    if(arr1.length === 0){
        return arr2
    }
    if(arr2.length === 0){
        return arr1
    }

    while(arr1Item || arr2Item){
        console.log(arr1Item,arr2Item);
        
        if(!arr2Item || arr1Item < arr2Item){
            mergedArray.push(arr1Item); 
            arr1Item = arr1[1];
            i++;
        }else{
            mergedArray.push(arr2Item);;
            arr2Item = arr2[1]
            j++;
        }
    }
    console.log(mergedArray);
    return mergedArray;
  
    

}

MergerTwoArray([0,3,4,31],[4,6,30]);