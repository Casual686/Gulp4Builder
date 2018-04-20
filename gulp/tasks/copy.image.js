'use strict';

module.exports = function() {
    $.gulp.task('copy:image', function() {
        return $.gulp.src('./source/img/**/*.*', { since: $.gulp.lastRun('copy:image') })
            .pipe($.gulp.dest($.config.root + '/img'));
    });
};
