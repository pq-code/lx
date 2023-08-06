function jumpFloor (number) {
    // 递归
    if (number == 1 || number == 0) return 1;
    if (number == 2) return 2;
    return jumpFloor(number - 1) + jumpFloor(number - 2);
    // 循环
    // if (number < 2) {
    //     return number
    // }
    // let last1 = 2; let last2 = 1
    // for (let i = 3; i <= number; i++) {
    //     last1 = last1 + last2;
    //     last2 = last1 - last2;
    // }
    // return last1
}


console.log(jumpFloor(7))
