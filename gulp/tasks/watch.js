import gulp from 'gulp';
import browserSync from 'browser-sync';

browserSync.create();

gulp.task( 'watch', function() {
	browserSync.init( {
		server: {
			baseDir: "app"
		}
	} );

	gulp.watch( './app/index.html', function() {
		return new Promise( function( resolve ) {
			browserSync.reload();
			resolve();
		} );
	} );

	gulp.watch( './app/assets/styles/**/*.css', gulp.series( 'styles', 'cssInject' ) );
} );

gulp.task( 'cssInject', function() {
	return gulp.src( './app/temp/styles/styles.css' )
		.pipe( browserSync.stream() );
} );
