module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    concat: {
	    	js:{
		       src: ['js/jsFiles/*.js'],
		       dest: 'js/GruntFiles/grunt.main.js'
		    },
		    css:{
		       src: ['css/mainCSS/*.css'],
		       dest: 'css/GruntCSS/grunt.style.css'
		    }
	    },
	    uglify: {
		    options: {
		      mangle: true
		    },
		    build: {
		        src: 'js/GruntFiles/grunt.main.js',
		        dest: 'js/GruntFiles/grunt.min.js'
		    }
  		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat','uglify']);
};