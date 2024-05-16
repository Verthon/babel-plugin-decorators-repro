# babel-plugin-decorators-repro

The example that I use are located in: `src/example.ts` and they are exported from entry file `src/index.ts`

Currently when I run build it breaks with following error:

```bash
RollupError: Unexpected token `@`. Expected identifier, string literal, numeric literal or [ for the computed key
    at getRollupError (file:///Users/me/babel-plugin-decorators-repro/node_modules/rollup/dist/es/shared/parseAst.js:394:41)
    at ParseError.initialise (file:///Users/me/babel-plugin-decorators-repro/node_modules/rollup/dist/es/shared/node-entry.js:11332:28)
    at convertNode (file:///Users/me/babel-plugin-decorators-repro/node_modules/rollup/dist/es/shared/node-entry.js:13082:10)
    at convertProgram (file:///Users/me/babel-plugin-decorators-repro/node_modules/rollup/dist/es/shared/node-entry.js:12399:12)
    at Module.setSource (file:///Users/me/babel-plugin-decorators-repro/node_modules/rollup/dist/es/shared/node-entry.js:14243:24)
    at async ModuleLoader.addModuleSource (file:///Users/me/babel-plugin-decorators-repro/node_modules/rollup/dist/es/shared/node-entry.js:18896:13)
```

It doesnt matter if I use inline config

```typescript
babel({
      babelConfig: {
        plugins: [
					["@babel/plugin-proposal-decorators", { version: "2023-05" }],
				],
      }
		}),
```

Or file `.babelrc.json`

Stack:

* typescript v5.4.5
* vite v5.2.11
* vite-plugin-babel v1.2.0
* @babel/plugin-proposal-decorators v7.24.1
* vite-tsconfig-paths v4.3.2
