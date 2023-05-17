// export const removeDuplicates = (nums) => {
//     let array = []
//     for (let i = 0; i < nums.length; i++) {
//         if (array.indexOf(nums[i]) == -1) {
//             array.push(nums[i])
//         }
//     }
//     return array
// }

// 删除数组中重复项
export const removeDuplicates = (nums) => {
    if (nums.length < 2) {
        return nums
    }
    let l = 1; let r = 1
    while (r < nums.length) {
        if (nums[l - 1] !== nums[r]) {
            nums[l] = nums[r]
            l++
        } else {
            r++
        }
    }
    return l
}
