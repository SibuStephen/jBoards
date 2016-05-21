/*jslint node: true */
"use strict";

"use strict";


module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {
        src: ['index.php']
      }
    },
    injector: {
      options: {
        // Task-specific options go here.
      },
      dev:{
        options: {
          addRootSlash: false,
          template: 'index.php'
        },
        files: {
          'index.php': [
            'src/app.js',
            'src/**/*.module.js',
            'src/**/*.js',
            '!src/**/*.spec.js',
            '!src/**/*.mock.js',
            'css/*.css',
            'src/**/*.css'
          ],
        }
      }
    },
  });
	grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-wiredep');
};
