/*jslint node: true */
"use strict";

"use strict";


module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    wiredep: {
      task: {
        src: ['index.html']
      }
    },
    injector: {
      options: {
        // Task-specific options go here.
      },
      dev:{
        options: {
          addRootSlash: false,
          template: 'index.html'
        },
        files: {
          'index.html': [
            'frontend/app.js',
            'frontend/**/*.module.js',
            'frontend/**/*.js',
            '!frontend/**/*.spec.js',
            '!frontend/**/*.mock.js',
            'css/*.css',
            'frontend/**/*.css'
          ],
        }
      }
    },
  });
	grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-wiredep');
};
