#!/usr/bin/env zx
// await Promise.all([
//   $`sleep 1; echo 3`,
//   $`sleep 2; echo 2`,
//   $`sleep 3; echo 1`,
// ])
// let tName = 'google/zx'
// await $`echo '/hello/${tName}'`

// await $`cat package.json`.pipe(process.stdout)

// let bear = await question('What kind of bear is best? ')
// let token = await question('Choose env variable: ', {
//   choices: Object.keys(process.env)
// })
// $`echo ${bear}`
// $`echo ${token}`


// await nothrow($`grep cc ./package.json`)
// await $`grep cc ./package.json`


// const user = 'nowdothat' // github 用户名
// const data = await fetch(`https://api.github.com/users/${user}/repos`)
// const urls = await data.json()
// const repos = urls.filter((info) => !info.fork).map((info) => info.git_url)
// for(let i = 0; i < repos.length; i++) {
//   $`echo ${repos[i]}`
// }

// zx test.mjs field field2
// let [, , , field, field2] = process.argv
// console.log(field, field2);

var argv = require('minimist')(process.argv.slice(2));
// ❯ zx .\test.mjs  -i 'fix: test'
// console.log('argv', argv.i);
var commitInfo = argv.i ? argv.i : 'fix: test'
await $`git add .`
await $`git commit -m ${commitInfo}`
await $`git push || git push --set-upstream origin master`
