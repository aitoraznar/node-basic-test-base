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
            tasks: ['jshint', 'jasmine_node']
        },

        jasmine_node: {
            options: {
                coverage: {
                    print: 'detail'
                },
                
                forceExit: true,
                match: '.',
                matchAll: false,
                specFolders: ['<%= meta.src.test %>/specs/'],
                extensions: 'js',
                captureExceptions: true,
                junitreport: {
                  report: false,
                  savePath : './build/reports/jasmine/',
                  useDotNotation: true,
                  consolidate: true
                },
                specNameMatcher: 'spec'
            },
            all: ['<%= meta.src.main %>']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jasmine-node');

    // Custom Tasks
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('test', ['jasmine_node']);

    grunt.registerTask('default', ['test']);

};
