export const arrangePercent = (data) => {
    return data.toFixed(1) + '%'
}

export const arrangePrice = (data, type) => {
    let mark = ''
    if(type == 'krw'){
        mark = '₩'
    }else{
        mark = '$'
    }
    return mark+data.toLocaleString()
}