export const maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let rustl = 0;
  while (i < j) {
    rustl = Math.max(rustl, Math.min(height[i], height[j]) * (j - i))
    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }
  return rustl
};


// 容器的大小取决于短板的高度，谁断谁就往中心移动，遍历完所有的高度，输出最大值
