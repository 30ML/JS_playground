function solution(n) {
  return String(n).split('').reduce((pre, cur) => Number(pre) + Number(cur))
}

console.log(solution(1000222333))