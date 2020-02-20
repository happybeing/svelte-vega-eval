# Evaluating Vega visualisation grammar in the Svelte framework

My aim here is to learn how to implement Vega and explore the differences 
from Vega-Lite. See also: [svelte-vega-lite-eval](https://github.com/theWebalyst/svelte-vega-lite-eval) for 
a corresponding evaluation of Vega-Lite. This is part of the research for 
[Visualisation Lab](https://github.com/theWebalyst/visualisation-lab).

I'm looking for common standards to represent data for visualisation. [Vega](https://vega.github.io/vega/) and [Vega Lite](https://vega.github.io/vega-lite/) are
the closest I've found to date. Both come with well documented data presentation models in the form of 
a JSON schema, plus authoring and validation tools, as well as their web
rendering engines which cover a wide range of visual presentations (i.e. bar and line charts, scattergraphs etc.).

## Vega versus Vega-Lite
	
Vega is more complex and has more representations than Vega Lite (e.g. only Vega supports
network visualisation in the form of a force directed graph). 

I think of Vega as more powerful more complex like a lower level language, and Vega-Lite as 
simpler, less configurable easier to use like a higher level language.

## Usage
You can use the Vega or Vega-Lite modules directly in web and nodejs as expected. The easiest way to
use either is with [Vega Embed](https://github.com/vega/vega-embed), which provides a common API using *both* `vega` and `vega-lite` modules. 
So with Vega Embed it makes no difference whether you use Vega and/or Vega-Lite 
visualisations (including no difference in bundle size).
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
```
Note: yarn >= 1.22.0 is required
```

...then start webpack:

```bash
yarn dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see each component produce output in the browser (and the browser console). Edit a component file in `src`, save it, and the page should reload with your changes.

## LICENSE

License: GPLv3 (see LICENSE)
