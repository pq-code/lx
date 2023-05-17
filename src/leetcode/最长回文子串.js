export const longestPalindrome = (s) => {
    if (s.length < 2) return s
    let l = 0
    let r = 0
    for (let i = 0; i < s.length; i++) {
        a(i, i + 1)
        a(i, i)
    }
    function a (n, m) {
        while (n >= 0 && m < s.length && s[n] == s[m]) {
            n--
            m++
        }
        if (m - n >= r - l) {
            l = n
            r = m
        }
    }
    console.log(s, l + 1, r, s.substring(l + 1, r,))
    return s.substring(l + 1, r,)
}
