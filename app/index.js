var Generator = require('yeoman-generator');

class Webpack extends Generator {
    _handleWebpack(filters) {
        // if (filters.fullstack) {
        //     this.fs.copyTpl(
        //         this.templatePath(),
        //         this.destinationRoot()
        //     );
        // } else {
            this.fs.copy(
                this.templatePath('webpack.config.client.js'),
                this.destinationPath()
            );
        // }
    }
    configuring() {
        // this.destinationRoot();
        // this._createFilters(this.answers);
        // this.config.set(this.filters);
    }
    writing() {
        // console.log('this.filters', this.filters);
// console.log('this.options.appname', this.options.appname);
//         console.log('this.config', this.config);

        const {options, filters} = this;
        this._handleWebpack(filters);
    }
}

module.exports = Webpack;
