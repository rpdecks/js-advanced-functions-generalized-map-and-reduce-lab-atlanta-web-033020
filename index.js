// Add your functions here
function map(ary, cb){
    let newAry = []

    for (let i = 0; i < ary.length; i++) {
        newAry.push(cb(ary[i]))
    }
    return newAry
}

function reduce(ary, start=0, cb){
    let agg = start;

    for (let i = 0; i < ary.length; i++) {
        agg  
    }
}