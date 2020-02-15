# Evaluating Vega visualisation grammar in the Svelte framework

This is part of the research for [Visualisation Lab](https://github.com/theWebalyst/visualisation-lab).

I'm looking for common standards to represent data for visualisation. [Vega](https://vega.github.io/vega/) and [Vega Lite](https://vega.github.io/vega-lite/) are
the closest I've found to date. Both come with well documented data presentation models in the form of 
a JSON schema, plus authoring and validation tools, as well as their web
rendering engines which cover a wide range of visual presentations (i.e. bar and line charts, scattergraphs etc.).

Vega is more complex and has more representations than Vega Lite (e.g. only Vega supports
networks such as force directed graph). 

You must include the Vega bundle as well as that for Vega Lite when using the latter,
so size and range of presentations Vega alone may be better wheras Vega Lite is probably
easier to implement.

My aim here is to learn how to implement Vega and explore the differences from Vega Lite.

## Get started

```bash
git clone https://github.com/theWebalyst/svelte-vega-eval
 svelte-vega-eval

cd svelte-vega-eval
```

Install the dependencies...

```bash
cd svelte-vega-eval
yarn
`
Note: yarn >= 1.22.0 is required
``

...then start webpack:

```bash
yarn dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see each component produce output in the browser (and the browser console). Edit a component file in `src`, save it, and the page should reload with your changes.

## LICENSE

License: GPLv3 (see LICENSE)
