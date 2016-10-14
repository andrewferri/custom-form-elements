module.exports = function(grunt){

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// Sass config
		sass: {
			options: {
                outputStyle: 'compressed',
				sourceMap: true,
				sourceComments: false
			},
			dist: {
				files: {
					'custom-form-elements.min.css': 'src/*.scss'
				}
			}
		},

		// Minify javascript
		uglify: {
			options: {
				sourceMap: true
			},
			build: {
				src: 'src/*.js',
				dest: 'jquery.custom-form-elements.min.js'
			}
		},

		// Watch and build
		watch: {
			sass: {
				files: 'src/*.scss',
				tasks: ['sass']
			},
			uglify: {
				files: 'src/*.js',
				tasks: ['uglify']
			}
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Run
	grunt.registerTask('default', ['watch']);
};
