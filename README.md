# Setup Node Typescript Example
## init node
```shell
npm init -y
```
## init tsconfig.json
```shell
tsc --init
```
## install package
```shell
yarn add @types/express @types/cors @types/axios express cors axios
```
## install package for Typscript
```shell
yarn add typescript ts-node-dev
```
## edit tsconfig.json uncomment outDir and rootDir
```
"outDir": "./dist",
"rootDir": "./src", 
```
## edit package.json
```
"start": "node dist/app.js",
"dev": "ts-node-dev src/app.ts",
"build": "tsc -p .
```
### for dev
```
yarn dev
```
### for build
```
yarn build
```
### for run production
```
yarn start
```
### write code in ./src 