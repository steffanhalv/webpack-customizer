class WebpackCustomizer {
  constructor(options) {
    this.options = Object.assign({
      hook: 'emit',
      action () {
        console.log('Action assigned')
      }
    }, options)
  }
  apply(compiler) {
    compiler.plugin(this.options.hook, this.options.action)
  }
}