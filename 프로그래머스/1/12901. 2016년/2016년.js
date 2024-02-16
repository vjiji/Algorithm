function solution(a, b) {
    var tempDate = new Date(2016, a-1, b);

    return tempDate.toString().slice(0,3).toUpperCase();
}
