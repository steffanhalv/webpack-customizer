**WebpackCustomizer**

***Hook into any webpack hooks using your own custom function***

*Install*

```batch
npm i webpack-customizer --d
```

*Use*

```js
const WebpackCustomizer = require('webpack-customizer')

plugins: [
    new WebpackCustomizer({
      hook: 'before-emit', // default: 'emit'
      action (compilation) {
        // Takes any Params based on used hook
      }
    })
]
```

Hook api:
https://webpack.js.org/api/compiler/#event-hooks