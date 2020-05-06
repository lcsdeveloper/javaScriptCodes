function doubleArr(arr){
    const result = [];

    for( let num of arr){
        let double = num * 2;
        result.push(double);
    }
    return result;
}

//doubleArr([1,2,3]);
