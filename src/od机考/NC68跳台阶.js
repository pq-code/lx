function jumpFloor (number) {
    // write code here
    // const results = [];
    console.log(number)
    if (number == 1 || number == 0) return 1;
    if (number == 2) return 2;
    return jumpFloor(number - 1) + jumpFloor(number - 2);
}


console.log(jumpFloor(4))
