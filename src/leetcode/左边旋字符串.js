export const reverseLeftWords = (s, n) => {
    return s.substring(n, s.length) + s.substring(0, n)
    // return s.slice(n, s.length) + s.slice(0, n)
}
