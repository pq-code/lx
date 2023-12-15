const readline = () => {
    return '0x2C'
}

const convert = async () => {
    let line = await readline();
    let tokens = line.split(' ');
    const map = { A: '10', B: '11', C: '12', D: '13', E: '14', F: '15' };
    let result = '';
    // 方法1
    while (tokens.length > 0) { 
        const target = tokens.shift();
        let a = target.slice(2, target.length);
        let r = 0
        for (let i = a.length - 1; i >= 0; i--) {
            let b = a[i] < 10 ? a[i] : map[a[i]];
            result = Number(b * Math.pow(16, r)) + Number(result)
            r++
        }
    }
    console.log(result)
    // 方法2
    // for(let i =0;i<tokens.length;i++){
    //     let a = parseInt(String(tokens[i]),16);
    //     result += a
    // }
    // console.log(result)
}
convert()
