
const  rMergeSort = function(arr) {
    if (arr.length === 1) return arr // done
    const midpoint = Math.floor(arr.length / 2);
    const left = arr.slice(0,midpoint);
    console.log(left);
    const right = arr.slice(midpoint, arr.length);
    console.log(right);
    const leftsorted = rMergeSort(left);
    const rightsorted = rMergeSort(right);
    return merge(leftsorted, rightsorted);
}


const merge = function(l,r){
    var i = 0;
    var j = 0;
    var result = [];
    while ((i < l.length) || ( j < r.length)) {
       if ((j === r.length) || (l[i] <= r[j])) {
           result.push(l[i++]);
       }
       else {
           result.push(r[j++]);
       }
    }
    return result;
}
const testArray = [ 1, 4, 3, 7, 4, 5, 6];
const sortedArray = rMergeSort(testArray);
//