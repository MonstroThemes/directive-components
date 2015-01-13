module.exports = function(grunt) {
    var jsx = [
        '**/*.jsx'
    ];
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        react: {
            files: {
                expand: true,
                src: jsx,
                ext: '.js'
            },
            options: {
                harmony: true
            }
        },
        watch: {
            jsx:{
                files: jsx,
                tasks: ['react']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
    grunt.registerTask('default', ['watch']);
};