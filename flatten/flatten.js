//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

function flatten(array) {
    for(var i = 0; i < array.length; i++){
        const flatArray = [];
       if(Array.isArray(array[i])){
            flatten(array[i])
            flatArray.push(array[i]);
        }else{
            flatArray.push(array[i]);
        }
    }
    return flatArray;
}

/*
I - array of arrays
O - array
C - 
E - no array elements inside the returned array

create new arr
iterate over the input array
if the element is an array
then iterate over it 
and push each element into the returned array
return it

If you know there is only one level of nested arrays this will work 
function flatten(array) {
    let flatArray = [];
    for(var i = 0; i < array.length; i++){
       if(Array.isArray(array[i])){
            for(var k = 0; k < array[i].length; k++){
                flatArray.push(array[i][k]);
            }
        }else{
            flatArray.push(array[i]);
        }
    }
    return flatArray;
}
*/