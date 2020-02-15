export default {
  "$schema": "https://vega.github.io/schema/vega-lite/v3.json",
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
}