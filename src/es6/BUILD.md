# Build and Test 

## Build 

```
yarn rollup src/main.js -o ./src/es6/bundle.js 
```

## Test 
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="module">
        import main from './bundle.js';        
        main();
    </script>
</head>
<body>
    
</body>
</html>
```

