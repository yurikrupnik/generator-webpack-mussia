var Generator = require('yeoman-generator');

class Webpack extends Generator {
    _handleWebpack(filters) {
        // if (filters.fullstack) {
            this.fs.copyTpl(
                this.templatePath(),
                this.destinationRoot(this.contextRoot)
            );
        // } else {
        //     this.fs.copy(
        //         this.templatePath('webpack/webpack.config.client.js'),
        //         this.destinationPath('webpack.config.client.js')
        //     );
        // }
    }
    configuring() {
        this.destinationRoot(__dirname);
        // this._createFilters(this.answers);
        // this.config.set(this.filters);
    }
    writing() {
        console.log('this.filters', this.filters);

        const {options, filters} = this;
        this._handleWebpack(filters);
    }
}

module.exports = Webpack;
