module.exports = function(config) {
    config.set({
        basePath: "../",
        frameworks: ["jasmine"],
        reporters: ["progress"],
        browsers: ["PhantomJS"],
        autoWatch: true,

        // these are default values anyway
        singleRun: true,
        colors: true,

        files : [
            //3rd Party Code
            "bower_components/angular/angular.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "app/**/*.js",
            "./test/unit/**/*.js"
        ]
    });
};