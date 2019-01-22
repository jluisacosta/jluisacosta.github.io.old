import gulp from 'gulp';
import connect from 'gulp-connect';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import browserify from 'browserify';
import babelify from 'babelify';
import filesystem from 'fs';
import smoosh from 'gulp-smoosher';

var config = {
  server: {
    root: 'build',
    rootdist: 'dist',
    port: 8080,
    livereload: true
  },
  views: {
    src: ['./src/views/index.pug', './src/views/thanks.pug'],
    watch: './src/views/**/*.pug',
    dest: './build'
  },
  styles: {
    src: './src/styles/app.scss',
    watch: './src/styles/**/*.scss',
    dest: './build'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: './src/scripts/**/*.js',
    dest: './build/app.js',
    extsrc: './src/scripts/lib/**/*.js',
    extdest: './build/lib'
  },
  dist: {
    html: {
      src: './build/**/*.html',
      dest: './dist'
    },
    img: {
      src: './build/img/**/*',
      dest: './dist/img'
    },
    fonts: {
      src: './build/fonts/**/*',
      dest: './dist/fonts'
    },
    video: {
      src: './build/video/**/*',
      dest: './dist/video'
    }
  }
};

gulp.task('server', () => {
  connect.server({
    root: config.server.root,
    port: config.server.port,
    livereload: config.server.livereload
  });
});

gulp.task('dist:server', () => {
  connect.server({
    root: config.server.rootdist,
    port: config.server.port,
    livereload: config.server.livereload
  });
});

gulp.task('build:html', () => {
  gulp.src(config.views.src)
    .pipe(pug({
      pretty: false
    }))
    .pipe(gulp.dest(config.views.dest))
    .pipe(connect.reload());
});

gulp.task('build:css', () => {
  gulp.src(config.styles.src)
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'//'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.styles.dest))
    .pipe(connect.reload());
});

gulp.task('build:extern_js', () => {
  gulp.src(config.scripts.extsrc)
    .pipe(gulp.dest(config.scripts.extdest));
});

gulp.task('build:js', () => {
  browserify({ debug: true })
    .transform(babelify.configure({
      presets: ["es2015"],
      compact: true,
      minified: true
    }))
    .require(config.scripts.src, {
      entry: true
    })
    .bundle()
    .on("error", (error) => {
      console.log("Error: " + error.message);
    })
    .pipe(filesystem.createWriteStream(config.scripts.dest));
});

gulp.task('livereload', () => {
  gulp.src(config.scripts.watch)
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(config.views.watch, ['build:html']);
  gulp.watch(config.styles.watch, ['build:css']);
  gulp.watch(config.scripts.watch, ['build:js', 'livereload']);
});

gulp.task('build',['build:css', 'build:extern_js', 'build:js', 'build:html']);

gulp.task('default', ['server','watch', 'build']);

gulp.task('dist:html', () => {
  gulp.src(config.dist.html.src)
    .pipe(smoosh())
    .pipe(gulp.dest(config.dist.html.dest));
});

gulp.task('dist:image_cpy', () => {
  gulp.src(config.dist.img.src)
    .pipe(gulp.dest(config.dist.img.dest));
});

gulp.task('dist:fonts_cpy', () => {
  gulp.src(config.dist.fonts.src)
    .pipe(gulp.dest(config.dist.fonts.dest));
});

gulp.task('dist:video_cpy', () => {
  gulp.src(config.dist.video.src)
    .pipe(gulp.dest(config.dist.video.dest));
});

gulp.task('dist',['dist:html', 'dist:image_cpy', 'dist:fonts_cpy', 'dist:video_cpy']);
