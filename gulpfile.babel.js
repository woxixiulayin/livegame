import gulp from 'gulp'
import babel from 'gulp-babel'
import app from './build/dev-server'

gulp.task('init', () => {

})

gulp.task('server', () => {
  gulp.src('server/**')
      .pipe(babel())
      .pipe(gulp.dest('server-dev/'))
})

gulp.task('watch', () => {

  gulp.watch('server/**',['server'])

})

gulp.task('default', ['init', 'watch'])
