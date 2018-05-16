import gulp from 'gulp';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.js';

gulp.task( 'scripts', function( done ) {
	webpack( webpackConfig, function( err, stats ) {
		if ( err ) {
			console.log(err.toString());
		}

		console.log( stats.toString() );
		done();
	} );
} );
