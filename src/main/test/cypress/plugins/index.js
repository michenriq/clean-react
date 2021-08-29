const cypressTypeScriptPreProcessor = require('./cy-ts-preprocessor')

module.exports = on => {
  on('file:preprocessor', cypressTypeScriptPreProcessor)
}
