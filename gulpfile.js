const del = require('del');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');

const jeditor = require('gulp-json-editor');
const run = require('gulp-run');

const distPath = './theme-dist';
const srcPath = 'libs/theme/';
const jsSrcPath = 'libs/theme/js/**/';
const sassSrcPath = 'libs/theme/sass/**/';

const exec = require('child_process').exec;
const semver = require('semver')


gulp.task('theme-clean', () => {
  return del([distPath], {force: true});
});

gulp.task('copy-js-deps', (cb) => {
  pump([
      gulp.src([jsSrcPath]),
      uglify(),
      gulp.dest(distPath + '/js/')
    ],
    cb
  );
});

gulp.task('copy-sass-files', () => {
  return gulp.src([sassSrcPath])
    .pipe(gulp.dest(distPath + '/sass/'));
});

gulp.task('copy-readme', () => {
  return gulp.src(['README.md'])
    .pipe(gulp.dest(distPath));
});

gulp.task('copy-package.json', (cb) => {
  return exec('npm show @irian/primeng-material@latest version', function (err, version, stderr) {
    gulp.src(srcPath + 'package.json')
      .pipe(jeditor((json) => {
        json.version = semver(version.trim()).inc("patch").toString();
        return json;
      }))
      .pipe(gulp.dest(distPath));
    cb(err);
  });
});

gulp.task('hello-world', function () {
  return run('').exec()
    .pipe(gulp.dest('output'));
});

gulp.task('watch-js', (cb) => {
  gulp.watch(jsSrcPath + '*.*', ['copy-js-deps']);
});

gulp.task('watch-sass', (cb) => {
  gulp.watch(sassSrcPath + '*.*', ['copy-sass-files']);
});


gulp.task('theme-build', ['copy-package.json', 'copy-readme', 'copy-js-deps', 'copy-sass-files']);
gulp.task('theme-watch', ['watch-js', 'watch-sass']);
