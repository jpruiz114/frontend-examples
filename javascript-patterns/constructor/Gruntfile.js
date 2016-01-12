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
					src:["Constructor1.js", "Constructor2.js"]
				}
			}
		}
	});
	
	grunt.registerTask("default", ["jsvalidate"]);
};
