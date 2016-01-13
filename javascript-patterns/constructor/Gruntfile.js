module.exports = function(grunt) {
	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		jsvalidate: {
			options:{
				esprimaOptions: {},
				globals: {},
				verbose: true
			},
			targetName:{
				files:{
					src:["*.js"]
				}
			}
		}
	});
	
	grunt.registerTask("default", ["jsvalidate"]);
};
