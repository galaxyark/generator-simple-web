'use strict';

var generators = require('yeoman-generator');

var SimpleWebGenerator = generators.Base.extend({
  writing: {
    app() {
      this.copy('index.html', 'index.html');
      this.copy('package.json', 'package.json');
      this.copy('README.md', 'README.md');
      this.copy('webpack.config.js', 'webpack.config.js');
      this.copy('.babelrc', '.babelrc');
      this.copy('src/index.jsx', 'src/index.jsx');
      this.copy('src/routes/routes.jsx', 'src/routes/routes.jsx');
      this.copy('src/reducers/rootReducer.js', 'src/reducers/rootReducer.js');
      this.copy('src/reducers/exampleReducer.js', 'src/reducers/exampleReducer.js');
      this.copy('src/components/app.jsx', 'src/components/app.jsx');
      this.copy('src/components/example.jsx', 'src/components/example.jsx');
      this.copy('style/style.css', 'style/style.css');
    }
  },

  end() {
    this.installDependencies();
  }
});

module.exports = SimpleWebGenerator;
