import gulp from 'gulp'
import babel from 'gulp-babel'
import app from './build/dev-server'

var runtime = {
            plugins: ['transform-runtime']
        }

gulp.task('init', () => {

})

gulp.task('server', () => {
  gulp.src('server/**')
      .pipe(babel(runtime))
      .pipe(gulp.dest('server-dev/'))
})

gulp.task('configbulid', () => {
      gulp.src('build/es5/*.js')
      .pipe(babel(runtime))
      .pipe(gulp.dest('build/'))

      gulp.src('config/es5/*.js')
      .pipe(babel(runtime))
      .pipe(gulp.dest('config/'))

})

gulp.task('watch', () => {

  gulp.watch('server/**',['server'])

})

gulp.task('default', ['init', 'configbulid', 'watch'])
