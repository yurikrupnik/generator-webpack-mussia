var Generator = require('yeoman-generator');

class Webpack extends Generator {
    _handleWebpack(filters) {
        if (filters.fullstack) {
            this.fs.copyTpl(
                this.templatePath('webpack/**'),
                this.destinationRoot()
            );
        } else {
            this.fs.copy(
                this.templatePath('webpack/webpack.config.client.js'),
                this.destinationPath('webpack.config.client.js')
            );
        }
    }
    configuring() {
        this.destinationRoot(this.options.appname);
        // this._createFilters(this.answers);
        // this.config.set(this.filters);
    }
    writing() {
        const {options, filters} = this;
        this._handleWebpack(filters);
    }
}

module.exports = Webpack;
