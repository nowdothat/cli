All functions ($, cd, fetch, etc) are available straight away without any imports.
$`command`
cd()
fetch() -> node-fetch package
question() -> readline package
sleep() -> setTimeout function
nothrow()

Or import globals explicitly (for better autocomplete in VS Code).

import 'zx/globals'
Executes a given string using the spawn function from the child_process package and returns


The pipe() method can be used to redirect stdout:
`await $`cat file.txt`.pipe(process.stdout)`


Scripts without extensions
If script does not have a file extension (like .git/hooks/pre-commit), zx assumes that it is an ESM module.



### Packages

Following packages are available without importing inside scripts.

#### `chalk` package

The [chalk](https://www.npmjs.com/package/chalk) package.

```
console.log(chalk.blue('Hello world!'))
```

#### `yaml` package

The [yaml](https://www.npmjs.com/package/yaml) package.

```
console.log(YAML.parse('foo: bar').foo)
```

#### `fs` package

The [fs-extra](https://www.npmjs.com/package/fs-extra) package.

```
let content = await fs.readFile('./package.json')
```

#### `globby` package

The [globby](https://github.com/sindresorhus/globby) package.

```
let packages = await globby(['package.json', 'packages/*/package.json'])

let pictures = globby.globbySync('content/*.(jpg|png)')
```

Also, globby available via the `glob` shortcut:

```
await $`svgo ${await glob('*.svg')}`
```

#### `os` package

The [os](https://nodejs.org/api/os.html) package.

```
await $`cd ${os.homedir()} && mkdir example`
```

#### `path` package

The [path](https://nodejs.org/api/path.html) package.

```
await $`mkdir ${path.join(basedir, 'output')}`
```

#### `minimist` package

The [minimist](https://www.npmjs.com/package/minimist) package.

Available as global const `argv`.