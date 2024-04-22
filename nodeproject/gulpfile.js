const gulp = require('gulp');
const jshint = require('gulp-jshint')

const jsFiles = ['*.js', 'src/**/*.js']

gulp.task('style', function(){
    return gulp.src(jsFiles)
        .pipe(jshint());
});

gulp.task('inject', function(){
    const wiredep = require('wiredep').stream;
    const options = { 
        bowerJson: require('./bower.json'),
        directory: './bower_components'
    };
    
    return gulp.src('./src/views/*.html')
            .pipe(wiredep(options))
            .pipe(gulp.dest('./src/views'))
});