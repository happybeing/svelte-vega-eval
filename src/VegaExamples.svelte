<script>
import {onMount} from 'svelte';
import {default as embed}  from 'vega-embed';

import simpleChartSpec from './data/vega-simple-chart.js';

onMount(() => {
  const spec = `{
      "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
      "description": "Simple bar chart",
      "data": {
          "values": [
              {"x": "A", "y": 28}, {"x": "y", "B": 55}, {"x": "C", "y": 43},
              {"x": "D", "y": 91}, {"x": "E", "y": 81}, {"x": "F", "y": 53},
              {"x": "G", "y": 19}, {"x": "H", "y": 87}, {"x": "I", "y": 52}
          ]
      },
      "mark": "bar",
      "encoding": {
          "x": {"field": "x", "type": "ordinal"},
          "y": {"field": "y", "type": "quantitative"}
      }
    }`;

  // option 1: where the spec is a string
   embed("#vis1", JSON.parse(spec), { actions: false }).catch(error =>
     console.log(error)
   );

  // option 2: js file
   embed("#vis2", simpleChartSpec, { actions: false }).catch(error =>
     console.log(error)
   );

  // option 3: json file
   embed("#vis3", './force.vg.json', { actions: false }).catch(error =>
     console.log(error)
   );
});

</script>

<div>
  <h2>Simple Chart from string and from JS file:</h2>
  <div id='vis1'></div>
  <div id='vis2'></div>

  <h2>Vega Force Graph from json file</h2>
  <div id='vis3'></div>
</div>