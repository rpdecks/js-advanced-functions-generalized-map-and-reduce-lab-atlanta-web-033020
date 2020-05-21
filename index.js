// Add your functions here
function map(ary, cb){
    let newAry = []

    for (let i = 0; i < ary.length; i++) {
        newAry.push(cb(ary[i]))
    }
    return newAry
}

function reduce(ary, cb, start){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
    for (; i < src.length; i++) {
        r = cb(src[i], r)
    }
    return r;
}