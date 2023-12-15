// 描述
// 密码要求:

// 1.长度超过8位

// 2.包括大小写字母.数字.其它符号, 以上四种至少三种

// 3.不能有长度大于2的包含公共元素的子串重复 （注：其他符号不含空格或换行）

// 数据范围：输入的字符串长度满足
// 1
// ≤
// �
// ≤
// 100

// 1≤n≤100
// 输入描述：
// 一组字符串。

// 输出描述：
// 如果符合要求输出：OK，否则输出NG

// 示例1
// 输入：
// 021Abc9000
// 021Abc9Abc1
// 021ABC9000
// 021$bc9000
// 复制
// 输出：
// OK
// NG
// NG
OK

const check = (e) => {
    let correct = 0;
    if (e.length < 8) return 'NG';
    if (/[A-Z]/.test(e)) correct++;
    if (/[a-z]/.test(e)) correct++;
    if (/[0-9]/.test(e)) correct++;
    if (/[^A-Za-z0-9]/.test(e)) correct++;
    if (correct < 3) return 'NG';
    if (/(.{3,}).*\1/g.test(e)) return 'NG';
    return 'OK';
}

const a = [
    '021Abc9000',
    '021Abc9Abc1',
    '021ABC9000',
    '021$bc9000'
]

a.forEach(e => console.log(check(e)))
