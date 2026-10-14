let a = 5;
let b = 6;
let c = 7;
if(a > b) {
    if (a > c) {
        console.log(a, "is largest");
    } else {
        console.log(c, "is largest");
    }
}else {
    if (b > c) {
        console.log(b, "is largest");
    } else {
        console.log(c, "is largest");
    }
}