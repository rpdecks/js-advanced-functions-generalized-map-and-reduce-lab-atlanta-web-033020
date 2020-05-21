// Add your functions here
function map(ary, cb){
    let newAry = []

    for (let i = 0; i < ary.length; i++) {
        newAry.push(cb(ary[i]))
    }
    return newAry
}

function reduce(ary, cb, start){
    let r = (!!start) ? start : ary[0]
    let i = (!!start) ? 0 : 1
    for (; i < ary.length; i++) {
        r = cb(ary[i], r)
    }
    return r;
}