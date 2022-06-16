# Build And Test 

CommonJS 모듈 사용하기. CommonJS는 NodeJs에서 사용한다. 

## Build 
```
yarn rollup src/main.js -o ./src/nodejs/bundle.js -f cjs
```

## Test
```
node ./src/nodejs/node-test.js 
```

