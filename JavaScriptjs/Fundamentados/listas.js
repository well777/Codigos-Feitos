function ordenaArray(arr){
    if(arr.length !== 2) {
        throw new Error("O array deve conter")
    }

    const [a, b] = arr;

    if(a < b){
        return [a, b];
    } else {
        return[b, a]
    }
}