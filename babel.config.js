
module.exports = function babelConfig(api) {
    api.cache(true)
    let   presets=[    '@babel/env',
    '@babel/react']
    let   plugins=[]


  
  if (process.env.NODE_ENV === 'emotion') {
    plugins.push([
      "transform-rename-import",
      {
        "original": "^styled-components$",
        "replacement": "@emotion/styled"
      }
    ])

   
  }
  return {presets,plugins}

}