# edge Adapter

Use [edge](https://github.com/edge-js/edge) templates with [Fractal](http://github.com/frctl/fractal).

## Usage

Install via NPM:

```bash
npm i @jrmc/fractal-edge-adapter --save
```

Then configure your Fractal instance:

```js
fractal.components.set('ext', '.edge'); // look for files with a .edge file extension
fractal.components.set('edge.components.path', path.join(__dirname, 'views')); // add specific path for edge components
fractal.components.engine('@jrmc/fractal-edge-adapter'); // register the edge engine adapter for your components
```
