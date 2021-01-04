function chunk(ary, size = 1) {
    var result = []
    var arr = []
    var l = 0
    if (size < 1) {
        size = 1
    }
    for (i = 0; i < ary.length; i++) {
        arr.push(ary[i])
        l++
        if (l == size) {
            result.push(arr)
            arr = []
            l = 0
        }
    }
    if (l != 0) {
        result.push(arr)
    }
    return result
}
function compact(ary) {
    var result = []
    for (i = 0; i < ary.length; i++) {
        if (ary[i]) {
            result.push(ary[i])
        }
    }
    return result
}
