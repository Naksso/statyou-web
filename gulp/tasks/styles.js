import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssVars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssImport from 'postcss-import';
import mixins from 'postcss-mixins';
import hexrgba from 'postcss-hexrgba';

gulp.task( 'styles', function() {
	return gulp.src( './app/assets/styles/styles.css' )
		.pipe( postcss( [ cssImport, mixins, cssVars, nested, hexrgba, autoprefixer ] ) )
		.pipe( gulp.dest( './app/temp/styles' ) );
} );
