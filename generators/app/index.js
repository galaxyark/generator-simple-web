'use strict';

var generators = require('yeoman-generator');

var SimpleWebGenerator = generators.Base.extend({
  writing: {
    app() {
      this.copy('index.html', 'index.html');
      this.copy('package.json', 'package.json');
      this.copy('README.md', 'README.md');
      this.copy('src/index.js', 'src/index.js');
    }
  },

  end() {
    this.installDependencies();
  }
});

module.exports = SimpleWebGenerator;
