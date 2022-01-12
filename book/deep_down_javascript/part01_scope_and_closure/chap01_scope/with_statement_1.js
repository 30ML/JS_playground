var user = {
  name: 'James',
  homepage: 'james.30ml.com',
  language: 'Korean',
}
with (user) {
  console.log(name === 'James'); // true
  console.log(homepage === 'james.korea.com'); // true
  console.log(language === 'Korean'); // true
  language = 'javascript';
  nickname = '30ml'; // GLOBAL_SCOPE !
}
console.log(user.language === 'javascript'); // true
console.log(user.nickname === '30ml');  // false