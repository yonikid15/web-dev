var gulp = require( 'gulp' ),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
    .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});

/* .on('error', function() {...}) 

    This 'on' function checks to see if this gulp task crashes due to any incorect syntax. It then makes sure it doesn't end the gulp task immediately, but instead continue running (this.emit('end')) by 'telling' gulp eveything ran smoothly
    
*/
