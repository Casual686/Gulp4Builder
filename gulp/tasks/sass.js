'use strict';

module.exports = function() {
    $.gulp.task('sass', function() {
        return $.gulp.src('./source/style/main.scss')
            .pipe($.gp.if($.dev, $.gp.sourcemaps.init()))
            .pipe($.gp.sassGlob())
            .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Style' }))
            .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
            .pipe($.gp.if(!$.dev, $.gp.cssUnit({
                type : 'px-to-rem',
                rootSize : 16
            })))
            .pipe($.gp.if(!$.dev, $.gp.csso()))
            .pipe($.gp.if($.dev, $.gp.sourcemaps.write()))
            .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: '.min' })))
            .pipe($.gulp.dest($.config.root + '/css'))
            .pipe($.browserSync.stream());
    })
};
