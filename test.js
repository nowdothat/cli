const {execSync, spawnSync, exec} = require('child_process');
var argv = require('minimist')(process.argv.slice(2));
var commitInfo = argv.i ? argv.i : 'fix: test';
execSync('git add .')

spawnSync('git', ['commit', '-m', commitInfo])

exec('git push', function (err, stdout, stderr) {
  if(err) {
    exec('git push --set-upstream origin master', function (err, stdout, stderr) {
      console.log(stdout.toString());
    })
  }
})