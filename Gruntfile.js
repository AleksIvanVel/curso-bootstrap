module.exports = function (grunt){

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        sass:{
            dist:{
                files:[{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest:'css',
                    ext: '.css'
                }]
            }
        },
        watch:{
            files: ['css/*.scss'],
            tasks:['css']
        },
        browserSync: {
            dev:{
                bsFiles:{
                    src:[
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options:{
                    watchTask:true,
                    server:{
                        baseDir: './'
                    }
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: 'images/*.{png,gif,jpg,jpeg}',
                    dest: 'dist/'
                }]
            }
        },
    });

    grunt.loadNpmTask('grunt-contrib-sass');
    grunt.loadNpmTask('grunt-contrib-watch');
    grunt.loadNpmTask('grunt-browser-sync');
    grunt.loadNpmTask('grunt-contrib-imagemin');
    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync', 'watch']);
    grunt.registerTask('image:compress',['imagemin']);
    
};  