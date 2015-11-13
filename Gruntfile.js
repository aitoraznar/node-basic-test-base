module.exports = function(grunt) {

    grunt.initConfig({
        meta: {
            package: grunt.file.readJSON('package.json'),
            src: {
                main: 'src/main',
                test: 'src/test'
            },
            bin: {
                coverage: 'bin/coverage'
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/specs/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },

        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'exec:test']
        },

        exec: {
            test: {
                'cmd': 'npm test',
                'stdout': true,
                'stderr': false
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');

    // Custom Tasks
    grunt.registerTask('dev', ['exec:test', 'watch']);
    grunt.registerTask('test', ['exec:test']);

    grunt.registerTask('default', ['exec:test']);

};
