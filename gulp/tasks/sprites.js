import gulp from 'gulp'
import svgSprite from 'gulp-svg-sprite'
import del from 'del'

const config = {
	mode: {
		css: {
			sprite: 'sprite',
			render: {
				css: {
					template: './gulp/templates/sprite.css',
				},
			},
		},
	},
}

gulp.task( 'clean', function() {
	return del( './app/temp/sprite' )
} )

gulp.task( 'createSprite', function() {
	return gulp.src( './app/assets/images/icons/**/*.svg' )
		.pipe( svgSprite( config ) )
		.pipe( gulp.dest( './app/temp/sprite' ) )
} )

gulp.task( 'sprites', gulp.series( 'clean', 'createSprite' ) )
